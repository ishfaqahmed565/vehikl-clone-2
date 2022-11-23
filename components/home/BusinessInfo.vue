<script setup></script>
<template>
  <div>
    <CenterDes extraStyle="pb-0 lg:pb-0">
      <template v-slot:header>What we do </template>
      <template v-slot:paragraph>
        We're a software consultancy specialising in PHP and JavaScript. We
        build best-in-class web applications written with popular frameworks
        such as Laravel, Express, NestJS, Vue, and React. Think of us as an
        extension of your team.</template
      >
      <InfoCard
        imgSrc="appdevelopment"
        class="bg-none"
        order="order-[-1] lg:order-1"
        extraStyle="px-[0rem]"
      >
        <template v-slot:header> App Development</template>
        <template v-slot:paragraph>
          We’re proud test-driven developers who focus on writing clean,
          maintainable code. Our developers are constantly learning new
          techniques and concepts that put them ahead of the game, and can help
          share that knowledge with your team. Pairing and Mobbing are practices
          we use daily as we take pride in our work, and we cherish the
          opportunity to teach and learn with our peers.
        </template>
      </InfoCard>
    </CenterDes>
    <InfoCard imgSrc="technical_leadership" order="lg:order-[-1] order-1">
      <template v-slot:header> Technical Leadership</template>
      <template v-slot:paragraph>
        We pride ourselves on delivering exceptional code, and we facilitate
        this when working with our clients. Our team consists of experts that
        will help you guide your team into building products you can be proud
        of.
      </template>
    </InfoCard>
    <InfoCard imgSrc="product_design" order="order-[-1] lg:order-1">
      <template v-slot:header> Product Design</template>
      <template v-slot:paragraph>
        We practice user-centered design. While we’re planning, designing, and
        building, we strive to solve the user’s problem first, so that your
        business goals are met. As a result, your users will experience software
        that is both intuitive and beautiful.
      </template>
    </InfoCard>
  </div>
</template>
<style scoped>
.bg-none {
  background: none;
}
</style>
