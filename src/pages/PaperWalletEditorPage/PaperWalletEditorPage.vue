<script lang="ts" setup>
  import PaperWalletEditorWidget from "@/widgets/PaperWalletEditorWidget/PaperWalletEditorWidget.vue";
  import { DonationList } from "@/entities/Donates";
</script>

<template>
  <PaperWalletEditorWidget />
  <h3>Support us by making a donation</h3>
  <p>
    Would you like to see our Editor continue to evolve and improve? Consider
    supporting our project with a donation. Every contribution helps us enhance
    our tools and serve you better.
  </p>
  <DonationList />
</template>
