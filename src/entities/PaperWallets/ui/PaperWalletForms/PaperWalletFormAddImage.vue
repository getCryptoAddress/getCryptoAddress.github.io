<script setup lang="ts">
import {
  NButton,
  NForm,
  NFormItem,
  NImage,
  NInput,
  NSpace,
  NUpload,
  NUploadDragger,
  useMessage,
} from "naive-ui";
import { ref, watch } from "vue";

const emit = defineEmits<{
  src: [string];
}>();
const message = useMessage();

const currentSrc = ref("");
const isLoaded = ref(false);

function handleAddImage({ file }: any) {
  currentSrc.value = URL.createObjectURL(file.file);
}

function handleSubmitForm() {
  if (!currentSrc.value) {
    message.error("Image link is required");
    return;
  }
  if (!isLoaded.value) {
    message.error("Image is not loaded yet");
    return;
  }
  emit("src", currentSrc.value);
}

watch(
  () => currentSrc.value,
  () => {
    isLoaded.value = false;
  }
);
</script>
<template>
  <NSpace>
    <NForm
      label-align="left"
      label-placement="left"
      size="small"
      label-width="auto"
      require-mark-placement="right-hanging"
      @submit="handleSubmitForm"
    >
      <NFormItem label="Image link">
        <NInput v-model:value="currentSrc" />
      </NFormItem>
      <NFormItem>
        <NUpload
          :default-upload="false"
          :show-file-list="false"
          @change="handleAddImage"
        >
          <n-upload-dragger> Load image from your computer </n-upload-dragger>
        </NUpload>
      </NFormItem>
      <NButton @click="handleSubmitForm">Add Image</NButton>
    </NForm>
    <NImage
      width="100"
      :src="currentSrc"
      :previewed-img-props="{ style: { border: '8px solid white' } }"
      style="border-radius: 5px"
      @load="isLoaded = true"
    />
  </NSpace>
</template>
