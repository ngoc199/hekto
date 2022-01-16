<script setup lang="ts">
import ProductItem from "../components/ProductItem.vue";
import data from "../../data.json";
</script>

<template>
  <div class="section-container">
    <h2 class="heading-2 text-center">Featured Products</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <ProductItem
        v-for="product in data.featuredProducts"
        :image-url="product.imageUrl"
        :code="product.code"
        :name="product.name"
        :price="product.price"
        shadow
      />
    </div>
  </div>
</template>
