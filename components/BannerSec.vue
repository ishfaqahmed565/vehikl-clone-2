<script setup>
import { ref, watchEffect } from 'vue'
const props = defineProps({
  imgSrc: String,
})
const src = ref()
watchEffect(async () => {
  src.value = (
    await import(
      /*
@vite-ignore */ `~/assets/${props.imgSrc}.webp`
    )
  ).default
})
</script>
<template>
  <div
    class="relative banner ocerflow-hidden min-h-[40vh] bg-gradient-to-t from-gray-900 via-gray-800/[.70] to-gray-800/[.70]"
  >
    <div class="h-full w-full absolute -z-10">
      <img :src="src" class="w-full h-full object-cover" alt="" />
    </div>

    <SectionContainer
      class="py-[3rem] lg:py-[2.8rem] absolute relative z-10 bg-none"
    >
      <div class="grid gap-5">
        <h2 class="text-4xl lg:text-5xl font-semibold">
          <slot name="header"></slot>
        </h2>
        <p class="text-xl lg:text-2xl max-w-[45ch] font-light">
          <slot name="paragraph"></slot>
        </p>
        <slot> </slot>
      </div>
    </SectionContainer>
  </div>
</template>
