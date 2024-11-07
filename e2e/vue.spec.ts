import { expect, test } from "@playwright/test";

// See here how to get started:
// https://playwright.dev/docs/intro
test("visits the app root url, sitemap.txt and robots.txt", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Get Crypto Address");

  if (process.env.PLAYWRIGHT_USE_BUILD) {
    await page.goto("/sitemap.txt");
    expect(await page.locator("pre").innerText()).toMatchSnapshot(
      "sitemap.txt",
    );
  }

  await page.goto("/robots.txt");
  expect(await page.locator("pre").innerText()).toMatchSnapshot("robots.txt");
});

test("check menu items", async ({ page }) => {
  await page.goto("/");
  const $menu = page.locator('[data-test-id="page-header-menu"]');
  const menuItems = $menu.getByRole("menuitem");
  const $$menuItems = await menuItems.all();
  await page.waitForTimeout(500);
  await expect(menuItems).toHaveCount(4);

  await expect($$menuItems[0]).toHaveText("Home");
  await expect($$menuItems[1]).toHaveText("Create Crypto Address");
  await expect($$menuItems[2]).toHaveText("Create Paper Wallet");
  await expect($$menuItems[3]).toHaveText("Paper Wallet Editor");
});

test("General flow", async ({ page, context, browserName }) => {
  if (browserName === "chromium") {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  }

  await page.goto("/");
  await page.waitForTimeout(500);
  await page.getByRole("link", { name: "Create Crypto Address" }).click();
  await page.waitForURL("/create-wallets/", { timeout: 1000 });

  // Check the default count of addresses
  {
    const $counter = page.locator('[data-test-id="input-count-tokens"] input');
    const count = await $counter.inputValue();
    expect(count).toBe("20");
  }

  // Generate new addresses
  await page.getByRole("button", { name: "Generate new addresses" }).click();

  // Check the count of generated addresses
  const $addresses = page.locator('[data-test-el="key-address-item"]');
  await $addresses.first().waitFor({ state: "visible", timeout: 5000 });
  expect(await $addresses.count()).toBe(20);

  /// Check the first address
  const $firstAddress = $addresses.first();
  const privateKey = await $firstAddress
    .locator('[data-test-el="private-key"]')
    .innerText();
  const address = await $firstAddress
    .locator('[data-test-el="address"]')
    .innerText();

  // Copy the first address
  if (browserName !== "webkit") {
    const $copyButton = $firstAddress.locator(
      '[data-test-id="button-copy-wallet-to-clipboard"]',
    );
    await $copyButton.click();
    const handle = await page.evaluateHandle(() =>
      navigator.clipboard.readText(),
    );
    const clipboardContent = await handle.jsonValue();
    expect(clipboardContent).toEqual(`${privateKey}:${address}`);
  }

  // Modal with the address
  {
    const $openModalButton = $firstAddress.locator(
      '[data-test-el="button-show-qr-codes"]',
    );
    await $openModalButton.click();
    const $modal = page.getByRole("dialog");
    await $modal.waitFor({ state: "visible", timeout: 1000 });
    const $modalSecret = $modal.locator(
      '[data-test-id="dialog-qr-code-secret"] .n-thing-main__description',
    );
    const $modalAddress = $modal.locator(
      '[data-test-id="dialog-qr-code-address"] .n-thing-main__description',
    );
    expect(await $modalSecret.innerText()).toBe(privateKey);
    expect(await $modalAddress.innerText()).toBe(address);
    const $modalMask = page.locator(".n-modal-mask");
    await page.mouse.click(1, 1);
    await $modalMask.waitFor({ state: "detached", timeout: 1000 });
  }

  /// Paper wallet page
  const $manualSecret = page.locator(
    '[data-test-id="input-manual-secret"] textarea',
  );
  const $manualAddress = page.locator(
    '[data-test-id="input-manual-address"] textarea',
  );
  // validate provided address and secret
  {
    const $printButton = $firstAddress.locator(
      '[data-test-el="button-generate-paper-wallet"]',
    );
    await $printButton.click();
    await page.waitForURL("/paper-wallets/");
    const $manualSecret = page.locator(
      '[data-test-id="input-manual-secret"] textarea',
    );
    const $manualAddress = page.locator(
      '[data-test-id="input-manual-address"] textarea',
    );
    await $manualSecret.waitFor({ state: "visible", timeout: 1000 });
    await $manualAddress.waitFor({ state: "visible", timeout: 1000 });
    expect(await $manualSecret.inputValue()).toBe(privateKey);
    expect(await $manualAddress.inputValue()).toBe(address);
  }

  // Generate paper wallet
  {
    await $manualSecret.fill("test-secret");
    await $manualAddress.fill("test-address");

    const $manualGeneratePaperWalletButton = page.locator(
      '[data-test-id="button-submit-manual-wallet"]',
    );
    await $manualGeneratePaperWalletButton.click();

    const $canvas = page.locator('[data-test-el="paper-wallet-canvas"]');
    const $firstCanvas = $canvas.first();
    const $secondCanvas = $canvas.nth(1);

    await $firstCanvas.waitFor({ state: "visible", timeout: 1000 });
    await expect($canvas.first()).toHaveScreenshot(
      "first-test-secret-address.png",
    );

    await $secondCanvas.waitFor({ state: "visible", timeout: 1000 });
    await expect($canvas.nth(1)).toHaveScreenshot(
      "second-test-secret-address.png",
    );
  }

  // todo add download test
  // const download = await page.waitForEvent("download", { timeout: 1000 });
});
