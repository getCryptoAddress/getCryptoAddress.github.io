<script setup lang="ts">
import TextualWalletsWidget from "@/widgets/TextualWalletsWidget/TextualWalletsWidget.vue";
</script>

<template>
  <h1>Generate Address and Secret keys</h1>
  <h3>How to generate Crypto Address?</h3>
  <p>
    Get Crypto Address allows for the easy secure generation of cryptocurrency
    addresses.
  </p>
  <ul>
    <li>
      For enhanced security, please activate the "Paranoid Mode" found on the
      left side of the page
    </li>
    <li>
      Choose the cryptocurrency for which you'd like to generate an address
    </li>
    <li>Click “Copy” to keep your address and key in a safe place</li>
    <li>
      Click “Paper Wallet” to create a paper wallet with the received address
      and key
    </li>
  </ul>

  <TextualWalletsWidget />

  <h3>Supported currencies:</h3>
  <ul>
    <li>Bitcoin</li>
    <li>Ethereum</li>
  </ul>
</template>
