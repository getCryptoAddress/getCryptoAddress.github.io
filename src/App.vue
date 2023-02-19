<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import PageTemplate from "@/components/PageTemplate/PageTemplate.vue";
import PageHeader from "@/components/PageHeader/PageHeader.vue";
</script>

<template>
  <PageTemplate>
    <template #navigation>
      <header>
        <PageHeader />

        <div class="wrapper">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/create-wallet">About</RouterLink>
          </nav>
        </div>
      </header>
    </template>
    <template #page>
      <RouterView />
    </template>
  </PageTemplate>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
