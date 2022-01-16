<script setup lang="ts">
import { RouterLink } from "vue-router";
defineProps<{
  href: string;
}>();
</script>

<template>
  <RouterLink
    to="{{href}}"
    class="md:hover:text-primary font-body block md:inline-block py-2 px-4 md:py-0 hover:bg-primary hover:text-white transition-all duration-300"
    ><slot></slot
  ></RouterLink>
</template>
