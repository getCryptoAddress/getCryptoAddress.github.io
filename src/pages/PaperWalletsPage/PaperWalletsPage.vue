<script lang="ts" setup>
import PaperWalletsPresetsWidget from "@/widgets/PaperWalletsPresetsWidget/PaperWalletsPresetsWidget.vue";
import { DonationList } from "@/entities/Donates";
</script>

<template>
  <h1>Create Paper Wallets</h1>
  <h3>What is Paper Wallet?</h3>
  <p>
    Paper Wallet is a physical method for storing cryptocurrencies offline.
    Generated via a wallet generator, this provides printed private and public
    keys for secure, direct access to digital assets
  </p>

  <h3>How to make Paper Wallet?</h3>
  <p>
    Get Crypto Address allows for the easy secure generation of cryptocurrency
    Paper Wallets
  </p>
  <ol>
    <li>
      For enhanced security, please activate the "Paranoid Mode" found on under
      the navigation menu
    </li>
    <li>
      Enter your secret key and address (you can generate them from
      <router-link :to="{ name: 'CreateWallets' }">
        Generate Crypto Address </router-link
      >) then click “Get Paper Wallets”
    </li>
    <li>
      Choose a template then download and print them instantly for safe offline
      storage
    </li>
  </ol>

  <PaperWalletsPresetsWidget />

  <h3>How can I use Paper Wallet?</h3>
  <ul>
    <li>
      Store your cryptocurrencies safely offline, reducing the risks associated
      with online storage
    </li>
    <li>
      Paper wallets make a perfect gift for introducing someone to the Crypto
      World
    </li>
    <li>
      For investors who plan to hold onto their cryptocurrencies for a long
      period
    </li>
    <li>
      Acting as backup, crypto paper wallets ensure asset recovery following
      digital storage method loss or failure
    </li>
  </ul>

  <h3>Follow the recommendations to avoid risks:</h3>
  <p>
    Remember, the security of a paper wallet relies largely on the user's
    actions and precautions
  </p>
  <ul>
    <li>
      Create multiple copies of your Paper Wallet to avoid loss. Store them in
      separate, secure locations
    </li>
    <li>
      Use Laminate or Waterproof Paper to protect your wallet from physical
      damage
    </li>
    <li>
      Ensure that you generate your Paper Wallet on a secure, malware-free
      computer. We also recommend using “Paranoid Mode”
    </li>
    <li>
      Keep your Paper Wallet private. Avoid showing it on camera or to other
      people, as anyone who sees the private key can access the funds
    </li>
    <li>
      Consider using a digital wallet for regular transactions and a Paper
      Wallet for long-term, secure storage
    </li>
    <li>
      Keep an eye on cryptocurrency updates to avoid any potential compatibility
      issues
    </li>
    <li>
      While setting up your Paper Wallet, make sure to double-check all details
      to avoid any errors that could lead to a loss of access to your crypto
      assets
    </li>
  </ul>
  <h3>Support us by making a donation</h3>
  <p>
    Do you appreciate our paper wallet designs and want more? We would be
    grateful if you consider donating. Your contribution helps us continue to
    innovate and offer a variety of unique designs for your crypto needs.
  </p>
  <DonationList />
</template>
