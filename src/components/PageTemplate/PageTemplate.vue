<template>
  <div class="page-template">
    <div class="page-template__content">
      <slot name="navigation" />
    </div>
    <div class="page-template__content">
      <slot name="page" />
    </div>
  </div>
</template>

<style lang="scss">
.page-template {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 1024px) {
    & {
      grid-template-columns: 1fr 1fr;
    }
  }
}

.page-template__content {
  position: relative;

  @media (min-width: 1024px) {
    & {
      min-height: 100vh;
    }
  }
}
</style>
