<script setup>
import SectionContainer from '@/components/SectionContainer.vue'
import HeadBorder from '@/components/HeadBorder.vue'

defineProps({
  extraStyle: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <SectionContainer :class="extraStyle">
    <div
      class="text-center max-w-[75ch] mx-auto flex items-center flex-col space-y-4"
    >
      <h2 class="text-gray-100 text-3xl lg:text-4xl font-bold">
        <slot name="header"></slot>
      </h2>
      <HeadBorder />
      <p class="text-xl lg:text-2xl text-gray-400">
        <slot name="paragraph"></slot>
      </p>
    </div>
    <slot class="mx-auto"> </slot>
  </SectionContainer>
  <!--CenterDescription ends here-->
</template>
<style scoped></style>
