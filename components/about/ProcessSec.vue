<template>
  <CenterDes extraStyle="pb-20 lg:pb-20 py-5 lg:py-10 ">
    <template #header>Our Process </template>
    <template #paragraph
      >We provide a caring environment that enables our team to focus on growth,
      and work collaboratively to deliver high quality code.
    </template>
    <div class="grid lg:grid-cols-3 gap-4 lg:gap-8 mt-32">
      <a
        href="#caring"
        class="grid gap-2 p-5 gray-border items-center justify-center bg-gradient-to-t from-black/[.96] to-black hover:bg-white"
      >
        <InfoHeader class="items-center">Caring</InfoHeader>

        <div class="lg:max-w-[290px] max-w-[150px]">
          <img src="~/assets/caring.webp" alt="" class="object-fit" />
        </div>
      </a>
      <a
        href="#growth"
        class="grid gap-2 p-5 gray-border items-center justify-center bg-gradient-to-t from-black/[.96] to-black hover:bg-white"
      >
        <InfoHeader class="items-center">Growth</InfoHeader>

        <div class="lg:max-w-[290px] max-w-[150px]">
          <img src="~/assets/growth.webp" alt="" class="object-fit" />
        </div>
      </a>
      <a
        href="#growth"
        class="grid gap-2 p-5 gray-border items-center justify-center bg-gradient-to-t from-black/[.96] to-black hover:bg-white"
      >
        <InfoHeader class="items-center">Delivery</InfoHeader>

        <div class="lg:max-w-[290px] max-w-[150px]">
          <img src="~/assets/delivery.webp" alt="" class="object-fit" />
        </div>
      </a>
    </div>
    <AboutCaringSec />
  </CenterDes>
</template>
