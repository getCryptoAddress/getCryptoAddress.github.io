<script setup lang="ts">
import CryptoDescription from "@/pages/HomePage/ui/CryptoDescription/CryptoDescription.vue";
import { NAlert } from "naive-ui";
</script>

<template>
  <CryptoDescription>
    <NAlert title="Beta" type="info">
      We are in beta. If you find a bug, please report it to us on
      <a
        href="https://github.com/getCryptoAddress/getCryptoAddress.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </NAlert>
    <p>
      Welcome to our website where you can generate cryptocurrency addresses and
      create paper wallets for free. We offer a variety of paper wallet
      templates, as well as the opportunity to design your own unique wallet.
    </p>
    <p>
      This project is open source, and all the code is available for review on
      <a
        href="https://github.com/getCryptoAddress/getCryptoAddress.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub </a
      >. We invite you to support us by contributing to the code or making a
      donation.
    </p>
    <!--    <div>-->
    <!--      <p>Donation</p>-->
    <!--      <NSpace>-->
    <!--        <NThing-->
    <!--          title="Bitcoin"-->
    <!--          description="123123123123123123112312312312312312312312312323123123"-->
    <!--        >-->
    <!--          <QRCode text="123123123" :width="100" />-->
    <!--        </NThing>-->
    <!--        <NThing-->
    <!--          title="Ethereum"-->
    <!--          description="123123123123123123123123123123123123123123123"-->
    <!--        >-->
    <!--          <QRCode text="123123123123123123123123123" :width="100" />-->
    <!--        </NThing>-->
    <!--      </NSpace>-->
    <!--    </div>-->
    <p>
      Enjoy a comfortable and secure cryptocurrency wallet creation experience!
    </p>
  </CryptoDescription>
</template>
