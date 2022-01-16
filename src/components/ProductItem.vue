<script setup lang="ts">
type Props = {
  imageUrl: string;
  name: string;
  code?: string;
  price: number;
  beforeDiscountPrice?: number;
  shadow?: boolean;
};

withDefaults(defineProps<Props>(), {
  shadow: false,
});
</script>

<template>
  <div class="group" :class="shadow ? 'shadow-lg' : ''">
    <!-- Image -->
    <div class="bg-lightGray flex items-center justify-center h-60">
      <figure>
        <img
          :src="`/img/${imageUrl}`"
          :alt="name"
          class="object-contain h-60 w-full"
        />
      </figure>
    </div>

    <!-- Card content -->
    <div
      v-if="code"
      class="flex flex-col items-center p-4 group-hover:bg-blue transition-all duration-300"
    >
      <h4
        class="text-primary text-lg mb-7 font-bold font-body group-hover:text-white transition-all duration-300"
      >
        {{ name }}
      </h4>
      <p
        class="text-sm text-darkBlue font-heading text-center mb-3 group-hover:text-white transition-all duration-300"
      >
        Code - {{ code }}
      </p>
      <p
        class="text-sm text-darkBlue font-heading text-center group-hover:text-white transition-all duration-300"
      >
        ${{ price }}
      </p>
    </div>
    <div v-else class="flex flex-row justify-between py-4">
      <h4
        class="font-heading text-base text-darkBlue border-b-2 border-gray cursor-pointer hover:border-darkBlue transition-all duration-300"
      >
        {{ name }}
      </h4>
      <div class="flex space-x-2 pr-4">
        <span class="text-darkBlue text-sm">${{ price }}</span>
        <span class="text-red-500 line-through text-sm"
          >${{ beforeDiscountPrice }}</span
        >
      </div>
    </div>
  </div>
</template>
