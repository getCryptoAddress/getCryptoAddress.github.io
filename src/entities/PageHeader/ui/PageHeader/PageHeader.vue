<script setup lang="ts">
  import PageHeaderDescription from "@/entities/PageHeader/ui/PageHeaderDescription/PageHeaderDescription.vue";
  import { RouterLink, useRoute } from "vue-router";
  import PageHeaderWrapper from "@/entities/PageHeader/ui/PageHeaderWrapper/PageHeaderWrapper.vue";
  import PageHeaderLogo from "@/entities/PageHeader/ui/PageHeaderLogo/PageHeaderLogo.vue";
  import { type MenuOption, NIcon, NMenu } from "naive-ui";
  import { type Component, h, ref, watch } from "vue";
  import { Home20Regular } from "@vicons/fluent";

  defineProps<{
    isParanoidMode: boolean;
  }>();

  function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) });
  }

  const route = useRoute();
  const selectedKey = ref<string>(route.name as string);

  watch(
    () => route.name,
    (name) => {
      selectedKey.value = name as string;
    },
  );

  const menuOptions: MenuOption[] = [
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              name: "Home",
            },
          },
          { default: () => "Home" },
        ),
      key: "Home",
      icon: renderIcon(Home20Regular),
    },
    {
      key: "divider-1",
      type: "divider",
      props: {
        style: {
          marginLeft: "32px",
        },
      },
    },
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              name: "CreateWallets",
            },
          },
          { default: () => "Create Crypto Address" },
        ),
      key: "CreateWallets",
    },
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              name: "PaperWallets",
            },
          },
          { default: () => "Create Paper Wallet" },
        ),
      key: "PaperWallets",
    },
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              name: "PaperWalletEditor",
            },
          },
          { default: () => "Paper Wallet Editor" },
        ),
      key: "PaperWalletEditor",
    },
  ];

  const { SSR } = import.meta.env;
</script>

<template>
  <PageHeaderWrapper>
    <PageHeaderLogo
      v-if="!SSR"
      :isParanoidModeEnabled="isParanoidMode"
    />
    <PageHeaderDescription />
    <nav
      style="max-width: 250px; text-align: left; margin: 0 auto; width: 100%"
    >
      <NMenu
        :options="menuOptions"
        v-model:value="selectedKey"
      />
    </nav>
    <slot />
  </PageHeaderWrapper>
</template>
