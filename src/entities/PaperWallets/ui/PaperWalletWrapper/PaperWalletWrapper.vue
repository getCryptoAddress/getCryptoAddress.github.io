<script lang="ts" setup></script>

<template>
  <div class="paper-wallet-wrapper-container">
    <div class="paper-wallet-wrapper">
      <div class="paper-wallet-wrapper__canvas">
        <div class="paper-wallet-wrapper__canvas-scroll-area">
          <slot name="canvas" />
        </div>
      </div>
      <div class="paper-wallet-wrapper__properties">
        <slot name="properties" />
      </div>
      <div class="paper-wallet-wrapper__items">
        <slot name="items" />
      </div>
      <div class="paper-wallet-wrapper__actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.paper-wallet-wrapper-container {
  container: paper-wallet-wrapper-container / inline-size;
  min-height: 780px;
}

.paper-wallet-wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas:
    "canvas canvas"
    "actions actions"
    "items properties";
  grid-gap: 1rem;
}
@container paper-wallet-wrapper-container (max-width: 520px) {
  .paper-wallet-wrapper {
    grid-template-columns: 1fr;
    grid-template-areas:
      "canvas"
      "actions"
      "properties"
      "items";
  }
}

.paper-wallet-wrapper__canvas {
  grid-area: canvas;
  overflow: hidden;
  display: grid;
}

.paper-wallet-wrapper__canvas-scroll-area {
  overflow-x: scroll;
  background: #9a9a9a82;
  border-radius: 5px;
  padding: 12px;
}

.paper-wallet-wrapper__properties {
  grid-area: properties;
}

.paper-wallet-wrapper__items {
  grid-area: items;
}
.paper-wallet-wrapper__actions {
  grid-area: actions;
}
</style>
