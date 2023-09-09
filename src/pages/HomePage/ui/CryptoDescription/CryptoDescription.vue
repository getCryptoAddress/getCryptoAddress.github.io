<template>
  <main class="page-description">
    <div>
      <slot />
    </div>
  </main>
</template>
<style lang="scss" scoped>
  .page-description {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    @media (min-width: 1024px) {
      & {
        min-height: calc(100vh - 60px);
      }
    }
  }

  .page-description__content {
  }
</style>
