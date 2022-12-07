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
@vite-ignore */ `~/assets/${props.imgSrc}.png`
    )
  ).default
})
</script>
<template>
  <div
    class="relative banner ocerflow-hidden min-h-[40vh] bg-gradient-to-t from-black via-black/[.80] to-black/[.80]"
  >
    <div class="h-full w-full absolute -z-10">
      <img :src="src" class="w-full h-full object-cover" alt="" />
    </div>

    <SectionContainer
      class="pt-[5rem] lg:pt-[3.8rem] pb-[5rem] lg:pb-[3.8rem] absolute relative z-10 bg-none"
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
