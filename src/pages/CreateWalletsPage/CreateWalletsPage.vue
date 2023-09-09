<script setup lang="ts">
  import TextualWalletsWidget from "@/widgets/TextualWalletsWidget/TextualWalletsWidget.vue";
  import { DonationList } from "@/entities/Donates";
</script>

<template>
  <h1>Generate Addresses and Secret keys</h1>
  <h3>How to generate Crypto Address?</h3>
  <p>
    Get Crypto Address allows for the easy secure generation of cryptocurrency
    addresses.
  </p>
  <ul>
    <li>
      For enhanced security, please activate the "Paranoid Mode" under the
      navigation menu
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

  <h3>Support us by making a donation</h3>
  <p>
    Would you like us to support more types of wallets and currencies? We would
    be happy if you supporting our project with a donation. Your support helps
    us expand our services and include more wallet options for you.
  </p>
  <DonationList />
</template>
