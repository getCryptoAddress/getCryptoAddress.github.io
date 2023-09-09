<template>
  <header class="page-header-wrapper">
    <div />
    <div class="page-header-wrapper__content">
      <slot />
    </div>
    <div />
  </header>
</template>

<style scoped lang="scss">
  .page-header-wrapper {
    display: grid;
    text-align: center;
    gap: 20px;

    @media (min-width: 1024px) {
      & {
        min-height: calc(100vh - 60px);
        grid-template-rows: minmax(30px, 1fr) auto 2fr;
      }
    }
  }

  .page-header-wrapper__content {
    display: grid;
    text-align: center;
    gap: 20px;
  }
</style>
