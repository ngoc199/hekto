<script setup lang="ts">
import data from "../../data.json";
import ProductItem from "../components/ProductItem.vue";
</script>
<template>
  <div class="section-container">
    <h2 class="heading-2 text-center">Latest Products</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductItem
        v-for="product in data.latestProducts"
        :image-url="product.imageUrl"
        :name="product.name"
        :price="product.price"
        :before-discount-price="product.beforeDiscountPrice"
      />
    </div>
  </div>
</template>
