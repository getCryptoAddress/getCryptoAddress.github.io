<script setup lang="ts">
import {
  NButton,
  NCard,
  NCollapseTransition,
  NDrawer,
  NDrawerContent,
  NIcon,
  NSpace,
  NSwitch,
} from "naive-ui";
import { ref } from "vue";
import { Settings20Regular } from "@vicons/fluent";

defineProps<{
  type: string;
  id: string;
}>();

const show = ref(false);
const showDrawer = ref(false);
</script>
<template>
  <n-card size="small" style="margin-top: 5px">
    <n-space vertical>
      <n-space justify="space-between">
        <n-space>
          <n-button
            size="small"
            type="tertiary"
            @click="showDrawer = !showDrawer"
          >
            <template #icon>
              <NIcon>
                <Settings20Regular />
              </NIcon>
            </template>
          </n-button>
          <n-switch v-model:value="show" />
          <div>Type: {{ type }}</div>
          <div>ID: {{ id }}</div>
        </n-space>
        <slot name="actions" />
      </n-space>

      <n-collapse-transition :show="show">
        <slot />
      </n-collapse-transition>
    </n-space>
  </n-card>
  <n-drawer
    v-model:show="showDrawer"
    placement="bottom"
    :block-scroll="false"
    class="drawer-fixed"
  >
    <n-drawer-content :title="id" closable>
      <slot />
    </n-drawer-content>
  </n-drawer>
</template>
