<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="bg-black text-white flex justify-center content-center gap-5 p-4">
    <RouterLink class="py-4 px-6 hover:bg-gray-700" to="/">Home</RouterLink>
    <RouterLink class="py-4 px-6 hover:bg-gray-700" to="/favorites">My favorites</RouterLink>
  </nav>
</template>
