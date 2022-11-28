<template>
  <div class="bg-black">
    <HomeHeroSec />
    <ContSec>
      <div class="grid lg:grid-cols-3 gap-4 lg:gap-8 mt-10">
        <a
          href="#caring"
          class="flex flex-col p-5 gray-border items-center justify-between bg-gradient-to-t from-black/[.96] to-black hover:bg-white"
        >
          <InfoHeader class="items-center text-base"
            >Business Growth</InfoHeader
          >

          <div class="lg:max-w-[290px] max-w-[150px]">
            <img src="~/assets/growth.png" alt="" class="object-fit" />
          </div>
          <p
            class="text-base lg:text-lg font-thin text-white text-center lg:text-start"
          >
            We maintain our global business standards according to our
            tried-and-true business methodology.
          </p>
        </a>
        <a
          href="#growth"
          class="flex flex-col p-5 gray-border items-center justify-between bg-gradient-to-t from-black/[.96] to-black hover:bg-white"
        >
          <InfoHeader class="items-center">Mission</InfoHeader>

          <div class="lg:max-w-[290px] max-w-[150px]">
            <img src="~/assets/mission.png" alt="" class="object-fit" />
          </div>
          <p
            class="text-base lg:text-lg font-thin text-white text-center lg:text-start"
          >
            Our mission, vision and values are the core foundation of our
            success and commitment to excellence.
          </p>
        </a>
        <a
          href="#caring"
          class="flex flex-col p-5 gray-border items-center justify-between bg-gradient-to-t from-black/[.96] to-black hover:bg-white"
        >
          <InfoHeader class="items-center text-base">Our Services</InfoHeader>

          <div class="lg:max-w-[290px] max-w-[150px]">
            <img
              src="~/assets/technical_leadership.webp"
              alt=""
              class="object-fit"
            />
          </div>
          <p
            class="text-base lg:text-lg font-thin text-white text-center lg:text-start"
          >
            Simplified hiring solutions for your everyday business needs.
            Including virtual assistants.
          </p>
        </a>
      </div>
    </ContSec>

    <HomeBusinessInfo />
    <HomeClientsInfo />
    <HomeCommunityInfo />
    <HomeAdvisorsInfo />
    <HomeMeetupsInfo />
    <CTASec />
  </div>
</template>

<script setup></script>
