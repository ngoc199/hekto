<script setup lang="ts">
import { RouterLink } from "vue-router";
import NavLink from "./NavLink.vue";
</script>

<template>
  <div class="flex bg-white items-center px-5 py-6 container justify-between">
    <div id="nav-brand" class="mr-[88px]">
      <RouterLink to="/" class="font-bold text-2xl text-black font-heading"
        >Hekto</RouterLink
      >
    </div>
    <!-- Mobile menu buttons -->
    <div class="md:hidden flex items-center" @click="toggleMenu">
      <button class="outline-none">
        <i class="fa fa-bars"></i>
      </button>
    </div>

    <!-- Desktop navigations -->
    <nav class="hidden md:flex md:items-center md:space-x-9 md:flex-grow">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/products">Products</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </nav>
    <div class="hidden md:flex">
      <input
        type="text"
        class="w-266-px border-2 border-r-0 border-gray focus:outline-none focus:border-primary px-2 py-1"
      />
      <button class="text-white bg-primary py-[8px] px-[13px]">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
  <!-- Mobile nav -->
  <nav
    :class="isMenuToggled ? 'max-h-96' : 'max-h-0'"
    class="md:hidden transition-all duration-300"
  >
    <NavLink href="/">Home</NavLink>
    <NavLink href="/products">Products</NavLink>
    <NavLink href="/contact">Contact</NavLink>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isMenuToggled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuToggled = !this.isMenuToggled;
    },
  },
});
</script>
