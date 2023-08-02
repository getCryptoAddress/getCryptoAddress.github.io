<script setup lang="ts">
import CryptoDescription from "@/pages/HomePage/ui/CryptoDescription/CryptoDescription.vue";
import { NAlert } from "naive-ui";
import DonationList from "@/entities/Donates/ui/DonationList/DonationList.vue";
import GithubLink from "@/shared/ui/GithubLink/GithubLink.vue";
</script>

<template>
  <CryptoDescription>
    <NAlert title="Beta" type="info">
      We are in beta. If you find a bug, please report it to us on
      <GithubLink />
    </NAlert>
    <p>
      Welcome to our website where you can generate cryptocurrency addresses and
      create paper wallets for free. We offer a variety of paper wallet
      templates, as well as the opportunity to design your own unique wallet.
    </p>
    <p>
      This project is open source, and all the code is available for review on
      <GithubLink />. We invite you to support us by contributing to the code or
      making a donation.
    </p>
    <h3>Donation List</h3>
    <DonationList />
    <p>
      Enjoy a comfortable and secure cryptocurrency wallet creation experience!
    </p>
  </CryptoDescription>
</template>
