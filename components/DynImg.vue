<script setup>
import { ref, watchEffect } from 'vue'

const src = ref()
const props = defineProps({
  imgSrc: String,
})
watchEffect(async () => {
  src.value = (
    await import(/* @vite-ignore */ `../assets/${props.imgSrc}.png`)
  ).default
})
</script>
<template>
  <img :src="src" alt="" />
</template>
