<script lang="ts" setup>
import { NCollapseTransition, NSpace, NSwitch } from "naive-ui";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

const emit = defineEmits<{
  (e: "isParanoidMode", payload: boolean): void;
  (e: "isParanoidModeEnabled", payload: boolean): void;
}>();

defineProps<{
  showParanoidMode?: boolean;
}>();

const { SSR } = import.meta.env;

const isParanoidMode = ref(false);
const isTrustDevice = ref(false);
const isIncognito = ref(false);
const isOffline = ref(SSR ? false : !navigator.onLine);

const isParanoidModeEnabled = computed(() => {
  return (
    isParanoidMode.value &&
    isTrustDevice.value &&
    isIncognito.value &&
    isOffline.value
  );
});

watch(isParanoidMode, (value) => {
  emit("isParanoidMode", value);
});
watch(isParanoidModeEnabled, (value) => {
  emit("isParanoidModeEnabled", value);
});

function updateOnlineStatus(event: Event) {
  isOffline.value = event.type !== "online";
}

onMounted(() => {
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
});

onUnmounted(() => {
  window.removeEventListener("online", updateOnlineStatus);
  window.removeEventListener("offline", updateOnlineStatus);
});
</script>
<template>
  <n-collapse-transition :show="!!showParanoidMode">
    <n-space
      vertical
      :size="12"
    >
      <div>
        <n-switch
          v-model:value="isParanoidMode"
          size="large"
        >
          <template #checked>Paranoid Mode</template>
          <template #unchecked>Unsafe Mode</template>
        </n-switch>
      </div>

      <n-collapse-transition :show="isParanoidMode">
        <n-space
          vertical
          :size="12"
        >
          <div>
            <div>Do you trust your device?</div>
            <n-switch v-model:value="isTrustDevice">
              <template #checked>Yes</template>
              <template #unchecked>No</template>
            </n-switch>
          </div>

          <n-collapse-transition :show="isTrustDevice">
            <div>Current tab in Incognito mode?</div>
            <n-switch v-model:value="isIncognito">
              <template #checked>Yes</template>
              <template #unchecked>No</template>
            </n-switch>
          </n-collapse-transition>
          <n-collapse-transition :show="isIncognito">
            <div>Turn off internet</div>
            <n-switch
              v-model:value="isOffline"
              disabled
            >
              <template #checked>Yes</template>
              <template #unchecked>No</template>
            </n-switch>
          </n-collapse-transition>
          <n-collapse-transition :show="isParanoidModeEnabled">
            <div>
              Perfect! Paranoid mode is now enabled. You can proceed to generate
              tokens. Just remember to save the tokens securely and close the
              current tab afterward.
            </div>
          </n-collapse-transition>
        </n-space>
      </n-collapse-transition>
    </n-space>
  </n-collapse-transition>
</template>
