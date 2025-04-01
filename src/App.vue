<script setup>
import AppHeader from './views/AppHeader.vue';
</script>

<template>
   <AppHeader />
    <router-view />
</template>

<style scoped>
header {
  line-height: 2;
  background-color: var(--tr-c-backround-secondary);
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}
</style>
