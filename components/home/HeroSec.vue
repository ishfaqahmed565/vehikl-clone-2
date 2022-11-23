<script setup>
import ButtonItem from '@/components/ButtonItem.vue'
</script>
<template>
  <div class="flex items-center max-h-[75vh] overflow-y-hidden relative">
    <img
      src="~/assets/candid-4.webp"
      alt=""
      class="w-full object-cover min-h-[75vh] border-b-[2px] border-gray-800"
    />
    <div
      class="absolute w-full flex items-center justify-center flex-col bg-gray-900 h-full bg-opacity-60"
    >
      <div class="text-center max-w-[75ch] flex flex-col items-center">
        <h1 class="text-white font-bold mb-10">
          <div class="text-3xl lg:text-4xl mb-4 text-gray-400">
            We build <span class="text-brand">exceptional</span>
          </div>
          <span class="text-5xl lg:text-7xl text-gray-200"
            >Web and Mobile Applications</span
          >
        </h1>
        <ButtonItem>Let's Work Together</ButtonItem>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
