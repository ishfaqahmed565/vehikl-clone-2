<template>
  <CenterDes class="caring" extraStyle="pb-0 lg:pb-0 bg-none" id="caring">
    <template #header>Caring</template>
    <template #paragraph
      >Caring is the foundation of a growth mindset. It’s the consistent
      feedback and supportive environment that makes our team and clients feel
      appreciated and heard.</template
    >
    <InfoCard
      imgSrc="client_dev"
      class="bg-none"
      order="order-[-1] lg:order-1"
      extraStyle="px-[0rem]"
    >
      <template v-slot:header>One Team With Our Clients </template>
      <template v-slot:paragraph>
        <span>
          As a client, our goal is to make your team look like a superstar to
          your stakeholders! We act as one team with you and share in your
          success.
        </span>

        <span>
          We provide constructive feedback and a supportive environment that
          empowers our team members to deliver great results.
        </span>
      </template>
    </InfoCard>
    <InfoCard
      imgSrc="career"
      class="bg-none"
      order="lg:order-[-1] order-1"
      extraStyle="px-[0rem] py-0 lg:py-0"
    >
      <template v-slot:header>Building a career </template>
      <template v-slot:paragraph>
        <span>
          As a developer, you’ll work in an environment where you’re constantly
          learning and have a team that supports your growth. Through our work
          placement and employment opportunities, we aim to provide meaningful
          work that helps students, graduates, and professionals develop the
          skills they need to pursue their professional goals in an exciting
          environment.
        </span>

        <span>
          You’ll reflect on a weekly basis with your team lead to voice how you
          feel about the current project you're working on, the environment
          you're working in, and other interests you may have.
        </span>
        <span>
          We start and end our days with these values in mind, and we want those
          who join our team and those who work with us to share this mindset.
        </span>
      </template>
    </InfoCard>
  </CenterDes>
</template>
