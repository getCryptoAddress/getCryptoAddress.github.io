import { expect, test } from "@playwright/test";

// Documentation: https://playwright.dev/docs/intro

let errorMessagesCount = 0;

const ignoreErrors = [
  "ResizeObserver loop completed with undelivered notifications.",
  // Blocked by AdBlocker
  "api-gateway.umami.dev",
];
const ignoreConsoleErrors = [
  // Blocked by AdBlocker
  "api-gateway.umami.dev",
  "Failed to load resource: net::ERR_FAILED",
];

// Register a global error listener
test.beforeEach(async ({ page, browserName }) => {
  errorMessagesCount = 0;

  page.on("console", (consoleMessage) => {
    if (consoleMessage.type() !== "error") {
      return;
    }

    // Webkit again have strange behavior.
    // It doesn't provide location for CSP error.
    // And not reproducible in Safari browser.
    if (browserName === "webkit") {
      return;
    }

    for (const ignoreError of ignoreConsoleErrors) {
      if (consoleMessage.text().includes(ignoreError)) {
        return;
      }
    }
    console.log(
      ">> Console log (error): ",
      consoleMessage.text(),
      consoleMessage.location(),
    );
    ++errorMessagesCount;
  });

  page.on("pageerror", (error) => {
    for (const ignoreError of ignoreErrors) {
      if (error.message.includes(ignoreError)) {
        return;
      }
    }
    console.log(">> Console error: ", error, error.stack);
    ++errorMessagesCount;
  });
});

test.afterEach(async () => {
  expect(errorMessagesCount).toBe(0);
});

test("visits the app root url, sitemap.txt and robots.txt", async ({
  page,
  browserName,
}) => {
  await page.goto("/");
  await page.waitForTimeout(2000);
  await expect(page.locator("h1")).toHaveText("Get Crypto Address");

  // Next tests are chromium only
  if (browserName !== "chromium") {
    return;
  }

  if (process.env.PLAYWRIGHT_USE_BUILD) {
    await page.goto("/sitemap.txt");
    await page.waitForTimeout(500);
    expect(await page.locator("pre").innerText()).toMatchSnapshot(
      "sitemap.txt",
    );
  }

  await page.goto("/robots.txt");
  await page.waitForTimeout(500);
  expect(await page.locator("pre").innerText()).toMatchSnapshot("robots.txt");
});

test("check menu items and each page", async ({ page }) => {
  await page.goto("/");
  const $menu = page.locator('[data-test-id="page-header-menu"]');
  const menuItems = $menu.getByRole("menuitem");
  const $$menuItems = await menuItems.all();
  await page.waitForTimeout(500);
  await expect(menuItems).toHaveCount(4);

  const pages = [
    { index: 0, url: "/", title: "Home" },
    { index: 1, url: "/create-wallets/", title: "Create Crypto Address" },
    { index: 2, url: "/paper-wallets/", title: "Create Paper Wallet" },
    { index: 3, url: "/paper-wallet-editor/", title: "Paper Wallet Editor" },
  ];

  for (const { index, title } of pages) {
    await expect($$menuItems[index]).toHaveText(title);
  }

  // Check Content-Security-Policy.
  // Need to refresh the page to check the CSP for each page separately.
  if (process.env.PLAYWRIGHT_USE_BUILD) {
    for (const { index, url } of pages) {
      if (index === 0) {
        continue;
      }
      const $item = $$menuItems[index];
      await $item.click();
      await page.waitForURL(url, { timeout: 5000 });
      await page.waitForTimeout(500);
      await page.reload();
      await page.waitForTimeout(1000);
    }
  }
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
  await page.waitForTimeout(500);

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
    await page.waitForTimeout(100);
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
    await page.waitForTimeout(100);
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
