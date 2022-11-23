<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  imgSrc: String,
  order: String,
  extraStyle: {
    type: String,
    default: '',
  },
})
const src = ref()
watchEffect(async () => {
  src.value = (
    await import(/* @vite-ignore */ `~/assets/${props.imgSrc}.webp`)
  ).default
})
</script>

<template>
  <SectionContainer :class="extraStyle">
    <div class="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
      <div class="description flex flex-col items-start space-y-3">
        <InfoHeader>
          <slot name="header"></slot>
        </InfoHeader>
        <p class="paragraphStyle flex flex-col space-y-5">
          <slot name="paragraph"></slot>
        </p>
      </div>
      <div class="img flex justify-center w-full" :class="order">
        <img :src="src" class="lg:w-full w-[240px] object-cover" alt="" />
      </div>
    </div>
  </SectionContainer>
</template>
<style scoped></style>
