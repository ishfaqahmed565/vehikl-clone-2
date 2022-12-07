<template>
  <CenterDes class="delivery" extraStyle="pb-0 lg:pb-0 " id="delivery">
    <template #header>Delivery</template>
    <template #paragraph
      >Delivery is the clean code and consistent design work we bring to our
      clients.</template
    >
    <InfoCard
      imgSrc="delivery"
      class="bg-none"
      extraStyle="px-[0rem]"
      order="lg:order-[-1] order-1"
    >
      <template v-slot:header>How We Deliver</template>
      <template v-slot:paragraph>
        <span>
          Vehikl acts as an extension of other development teams. We build
          best-in-class web applications with a strong focus on test-driven
          development.
        </span>

        <span>
          We collaborate with our clients and use Mob programming to deliver
          quality code at a consistent pace. Working as a team enables us to
          quickly remove bottlenecks and shorten the code review process. On a
          weekly basis, we focus on delivering features that provide business
          value to stakeholders.
        </span>
      </template>
    </InfoCard>
  </CenterDes>
</template>
