<script setup>
defineProps({
  show: Boolean,
})
</script>
<template>
  <Transition name="wrapper">
    <div v-if="show" class="modal-mask bg-gray-900 bg-opacity-90 opacity-[.9]">
      <SectionContainer class="background-none">
        <ul class="py-[4.5rem] grid gap-5">
          <li class="grid gap-5">
            <NuxtLink to="/" exact class="text-2xl w-full pl-6">Home</NuxtLink>
            <hr class="border-t-[1.2px] border-gray-800" />
          </li>
          <li class="grid gap-5">
            <NuxtLink to="/about" class="text-gray-300 text-2xl w-full pl-6"
              >How we work</NuxtLink
            >
            <hr class="border-t-[1.2px] border-gray-800" />
          </li>
          <li class="grid gap-5">
            <NuxtLink to="/team" class="text-gray-300 text-2xl w-full pl-6"
              >Team</NuxtLink
            >
            <hr class="border-t-[1.2px] border-gray-800" />
          </li>
          <li class="grid gap-5">
            <NuxtLink to="/jobs" class="text-gray-300 text-2xl w-full pl-6"
              >We're Hiring!
            </NuxtLink>
            <hr class="border-t-[1.2px] border-gray-800" />
          </li>
          <li class="grid gap-5">
            <NuxtLink to="/contact" class="text-gray-300 text-2xl w-full pl-6"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </SectionContainer>
    </div>
  </Transition>
</template>
<style>
.wrapper-enter-active {
  animation-name: finished;
  animation-duration: 0.2s;
}
.wrapper-leave-active {
  animation: finished 0.2s reverse;
}
@keyframes finished {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.9;
  }
}
.background-none {
  background: none;
}
.modal-mask {
  position: fixed;
  inset: 0;
  backdrop-filter: blur(4px);
}
.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}
.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}
.modal-footer button {
  background: #ddd;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}
.modal-footer button:hover {
  background: rgb(157, 154, 154);
}
</style>
