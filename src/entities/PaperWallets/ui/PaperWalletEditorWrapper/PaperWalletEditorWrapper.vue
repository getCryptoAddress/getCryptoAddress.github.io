<script lang="ts" setup></script>

<template>
  <div class="paper-wallet-editor-wrapper-container">
    <div class="paper-wallet-editor-wrapper">
      <div class="paper-wallet-editor-wrapper__canvas">
        <slot name="canvas" />
      </div>
      <div class="paper-wallet-editor-wrapper__properties">
        <slot name="properties" />
      </div>
      <div class="paper-wallet-editor-wrapper__items">
        <slot name="items" />
      </div>
      <div class="paper-wallet-editor-wrapper__actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.paper-wallet-editor-wrapper-container {
  container: paper-wallet-editor-wrapper-container / inline-size;
  min-height: 500px;
}

.paper-wallet-editor-wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas:
    "canvas canvas"
    "actions actions"
    "items properties";
  grid-gap: 1rem;
}
@container paper-wallet-editor-wrapper-container (max-width: 520px) {
  .paper-wallet-editor-wrapper {
    grid-template-columns: 1fr;
    grid-template-areas:
      "canvas"
      "actions"
      "properties"
      "items";
  }
}

.paper-wallet-editor-wrapper__canvas {
  grid-area: canvas;
  background: #9a9a9a82;
  border-radius: 5px;
  padding: 12px;
}

.paper-wallet-editor-wrapper__properties {
  grid-area: properties;
}

.paper-wallet-editor-wrapper__items {
  grid-area: items;
}
.paper-wallet-editor-wrapper__actions {
  grid-area: actions;
}
</style>
