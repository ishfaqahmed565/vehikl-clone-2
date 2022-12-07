<script setup>
const team = [
  {
    name: 'Mostafizur Rahman',
    img: 'mostafizur-rahman',
    role: 'CEO & Founded',
  },
  {
    name: 'Suvajit Das',
    img: 'suvajit_das',
    role: 'Software Engineer',
  },
  {
    name: 'Tajul Islam',
    img: 'tajul_islam',
    role: 'Software Engineer',
  },
  {
    name: 'Mosharaf Hossain',
    img: 'mosharaf',
    role: 'Software Engineer',
  },
  {
    name: 'Tanvir Wahid',
    img: 'tanvir_wahid',
    role: 'Software Engineer',
  },
  {
    name: 'Saad',
    img: 'saad',
    role: 'Software Engineer',
  },

  {
    name: 'Ashiquzzaman',
    img: 'ashiq',
    role: 'Software Engineer',
  },
]
</script>
<template>
  <SectionContainer class="py-5 lg:py-10">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
      <div
        v-for="member in team"
        :key="member.img"
        class="grid text-center gap-3 border rounded border-grayBorder items-center justify-center"
      >
        <div class="border-b border-grayBorder">
          <DynImg
            :imgSrc="member.img"
            class="w-[360px] h-[300px] object-contain"
          />
        </div>
        <div>
          <h4 class="text-base">{{ member.name }}</h4>
          <p class="text-gray-400 text-xs">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>
