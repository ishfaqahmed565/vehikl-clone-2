<template>
  <CenterDes class="growth" id="growth">
    <template #header>Growth</template>
    <template #paragraph
      >Growth is the daily investment we make to enhance our collective
      expertise while building lasting relationships.</template
    >
    <div class="growth-descriptions mt-24 grid gap-[3.8rem]">
      <div class="desc-sec grid gap-5">
        <InfoHeader>Growth Sessions</InfoHeader>
        <p class="paragraphStyle max-w-[78ch]">
          On a daily basis, we spend an hour to an hour and a half on either
          personal or team development. Growth Sessions can be project-focused,
          challenge-based, or a session that promotes growth, learning, and
          knowledge sharing with members on our team.
        </p>
      </div>
      <div class="desc-sec grid gap-6">
        <InfoHeader>Mobbing</InfoHeader>
        <p class="paragraphStyle max-w-[78ch]">
          Mobbing is the foundation of teamwork and at Vehikl, we aspire to
          share this knowledge with the clients that we work with.
        </p>
      </div>
      <div class="desc-sec grid gap-5">
        <InfoHeader>The 3 roles are</InfoHeader>
        <div class="grid lg:grid-cols-3 gap-4 lg:gap-8">
          <div
            class="grid gap-2 p-5 gray-border items-center justify-center bg-gradient-to-t from-gray-800 border border-gray-800 to-gray-900"
          >
            <InfoHeader class="items-center text-lg lg:text-lg"
              >Navigator</InfoHeader
            >

            <div class="lg:max-w-[290px] max-w-full">
              <img src="~/assets/navigator_1.webp" alt="" class="object-fit" />
            </div>
          </div>
          <div
            class="grid gap-2 p-5 gray-border items-center justify-center bg-gradient-to-t from-gray-800 border border-gray-800 to-gray-900"
          >
            <InfoHeader class="items-center text-lg lg:text-lg"
              >Driver</InfoHeader
            >

            <div class="lg:max-w-[290px] max-w-full">
              <img src="~/assets/driver_2.webp" alt="" class="object-fit" />
            </div>
          </div>
          <div
            class="grid gap-2 p-5 gray-border items-center justify-center bg-gradient-to-t from-gray-800 border border-gray-800 to-gray-900"
          >
            <InfoHeader class="items-center text-lg lg:text-lg"
              >Navigator</InfoHeader
            >

            <div class="lg:max-w-[290px] max-w-full">
              <img src="~/assets/mob.webp" alt="" class="object-fit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </CenterDes>
</template>
