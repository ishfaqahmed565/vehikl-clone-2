<script setup>
import HeadBorder from '@/components/HeadBorder.vue'
</script>
<template>
  <div class="grid lg:grid-cols-3 mt-20 gap-8">
    <div class="flex flex-col lg:p-8 p-4 gap-5 gray-border items-start">
      <div
        class="h-48 flex items-center justify-center mb-6 bg-gray-800 p-4 rounded items-center w-full"
      >
        <img src="~/assets/gpug.svg" alt="" class="w-32 max-h-24" />
      </div>
      <div class="flex flex-col items-start">
        <h3 class="text-2xl lg:text-3xl text-gray-100 mb-4">GPUG</h3>
        <HeadBorder />
      </div>
      <p class="paragraphStyle">
        For all PHP developers who want to dig a bit deeper into modern day
        code, join us for discussions about increasing your PHP skills in a
        relaxed environment, supplied with drinks, food, and fun!
      </p>
      <a
        href="#"
        class="mt-auto text-brand text-base hover:underline justify-self-end"
        >View on meetup.com</a
      >
    </div>
    <div class="flex flex-col lg:p-8 p-4 gap-5 gray-border items-start">
      <div
        class="h-48 flex items-center justify-center mb-6 bg-gray-800 p-4 rounded items-center w-full"
      >
        <img src="~/assets/kwjs-logo.svg" alt="" class="w-32 max-h-24" />
      </div>
      <div class="flex flex-col items-start">
        <h3 class="text-2xl lg:text-3xl text-gray-100 mb-4">KW JavaScript</h3>
        <HeadBorder />
      </div>
      <p class="paragraphStyle">
        Are you currently living or working in Kitchener Waterloo, and want a
        local group to meet people, and talk about JavaScript? That's what we're
        all about! Join us as we talk all things JavaScript and learn about it
        at our monthly events!
      </p>
      <a href="#" class="mt-auto text-brand text-base hover:underline"
        >View on meetup.com</a
      >
    </div>
    <div class="flex flex-col lg:p-8 p-4 gap-5 gray-border items-start">
      <div
        class="h-48 flex items-center justify-center mb-6 bg-gray-800 p-4 rounded items-center w-full"
      >
        <img src="~/assets/dev-ldn.svg" alt="" class="w-32 max-h-24" />
      </div>
      <div class="flex flex-col items-start">
        <h3 class="text-2xl lg:text-3xl text-gray-100 mb-4">Dev London</h3>
        <HeadBorder />
      </div>
      <p class="paragraphStyle">
        Dev London is your opportunity to gather insights and get inspired by
        the most influential software professionals. Hear their stories, ask
        them questions, and network with others in the industry. Refreshments
        are on us!
      </p>
      <a href="#" class="mt-auto text-brand text-base hover:underline"
        >View on meetup.com</a
      >
    </div>
  </div>
</template>
<style scoped></style>
