<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />

  <footer class="bg-[#E7E4F8]">
    <div
      class="flex flex-col md:flex-row container py-2 justify-between items-center"
    >
      <div class="text-base">
        Build with ❤ by
        <a
          href="https://www.upwork.com/freelancers/~011dba3d4f0bc8a969"
          target="_blank"
          class="hover:text-primary hover:underline"
          >Ngoc Nguyen</a
        >
      </div>

      <!-- Socials -->
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a
          href="https://twitter.com/ngocoder"
          target="_blank"
          class="hover:text-primary"
          ><i class="fa fa-lg fa-twitter"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/minh-ngoc-nguyen-duy/"
          target="_blank"
          class="hover:text-primary"
          ><i class="fa fa-lg fa-linkedin"></i
        ></a>
      </div>
    </div>
  </footer>
</template>
