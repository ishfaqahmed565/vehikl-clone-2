<script setup>
import CenterDes from '@/components/CenterDes.vue'
import ButtonItem from '@/components/ButtonItem.vue'
</script>
<template>
  <CenterDes extraStyle="py-10 lg:py-10 border-t-[2px] border-gray-800">
    <template #header>Sound Interesting?</template>
    <template #paragraph
      >The Process of connecting with us is easy. All you need to do is assess
      your needs, identify the tasks which you wish to delegate, and we can get
      started,</template
    >
    <div class="w-full mt-10 flex items-center justify-center">
      <ButtonItem href="/contact">WORK WITH US</ButtonItem>
    </div>
  </CenterDes>
</template>
<style scoped></style>
