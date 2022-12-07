<script setup></script>
<template>
  <div>
    <CenterDes extraStyle="pb-0 lg:pb-0">
      <template v-slot:header>What we do best</template>

      <InfoCard
        imgSrc="machine_learning"
        class="bg-none"
        order="order-[-1] lg:order-1"
        extraStyle="px-[0rem] lg:pt-[10rem] lg:pb-[10rem]"
      >
        <template v-slot:header> App Development</template>
        <template v-slot:paragraph>
          Utilizing cutting-edge technologies, like as React, React Native,
          Flutter, and others, to make your products scalable and ready for the
          future.
        </template>
      </InfoCard>
    </CenterDes>
    <InfoCard imgSrc="machine_learning" order="order-[-1]">
      <template v-slot:header> ML & AI</template>
      <template v-slot:paragraph>
        In a world full of uncertainties and unexpecting waves, we offers
        comprehensive AI services that help companies build intelligent
        workflows, drastically boost productivity, and reduce costs.
      </template>
    </InfoCard>
    <InfoCard imgSrc="e-commerce" order="order-[-1] lg:order-1">
      <template v-slot:header> E-COMMERCE</template>
      <template v-slot:paragraph>
        We have the knowledge and tools to support your company's marketing
        initiatives, including e-commerce options that let you market and sell
        your goods and services online.
      </template>
    </InfoCard>
    <InfoCard imgSrc="cloud" order="order-[-1]">
      <template v-slot:header> CLOUD SOLUTION</template>
      <template v-slot:paragraph>
        Our applications are cutting-edge secure, accessible from any device
        (PC, tablet, or mobile), simple to use, attractive, and scalable rich
        enterprise applications (REA) in an online cloud environment.
      </template>
    </InfoCard>
    <InfoCard imgSrc="banking" order="order-[-1] lg:order-1">
      <template v-slot:header>Banking</template>
      <template v-slot:paragraph>
        By embracing the latest technologies, we build customized banking
        solutions and dedicated software to leverage your unique banking &
        financial business needs.
      </template>
    </InfoCard>
    <InfoCard imgSrc="digital-content" order="order-[-1]">
      <template v-slot:header>DIGITAL CONTENT</template>
      <template v-slot:paragraph>
        Our service makes it possible to incorporate content into your business
        operations and offers features for unstructured data collection,
        document management, process automation, and workflows.
      </template>
    </InfoCard>
    <InfoCard imgSrc="api" order="order-[-1] lg:order-1">
      <template v-slot:header>API DEVELOPMENT</template>
      <template v-slot:paragraph>
        APIs are carefully developed to guarantee maximum profit and continuous
        availability for your apps and features.
      </template>
    </InfoCard>
    <InfoCard imgSrc="maintenance" order="order-[-1]">
      <template v-slot:header>MAINTENANCE & UPGRADES</template>
      <template v-slot:paragraph>
        Our applications are cutting-edge secure, accessible from any device
        (PC, tablet, or mobile), simple to use, attractive, and scalable rich
        enterprise applications (REA) in an online cloud environment.
      </template>
    </InfoCard>
    <InfoCard imgSrc="project-management" order="order-[-1] lg:order-1">
      <template v-slot:header>PROJECT MANAGEMENT</template>
      <template v-slot:paragraph>
        You can rely on us to steer your project in the right direction and get
        the greatest results from start to finish.
      </template>
    </InfoCard>
  </div>
</template>
<style scoped></style>
