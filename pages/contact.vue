<template>
  <div>
    <BannerSec imgSrc="candid-4">
      <template #header> Contact us</template>
      <template #paragraph>
        Would you like to work with Vehikl on your next project? Curious about
        careers at Vehikl?</template
      >
    </BannerSec>
    <SectionContainer class="pt-0 lg:pt-0 bg-gray-900">
      <div class="grid lg:grid-cols-5 gap-4 lg:gap-8">
        <div
          class="lg:col-span-3 grid gap-4 lg:mb-0 lg:pr-8 lg:border-r lg:border-gray-800"
        >
          <InfoHeader> Get in touch </InfoHeader>
          <p class="paragraphStyle">
            We'd love to talk to you! Get in touch via the contact form, or send
            us an email directly at
            <a class="text-brand hover:underline hover:cursor-pointer"
              >go@vehikl.com</a
            >
            or by phone at
            <a class="text-brand hover:underline hover:cursor-pointer"
              >(519) 746-9855</a
            >.
          </p>
          <form action="" class="grid gap-[1.2rem]">
            <div>
              <label for="username" class="paragraphStyle">Name *</label>
              <input
                type="text"
                id="username "
                class="text-base text-gray-300 p-4 border shadow-sm bg-gray-800 placeholder:text-gray-500 border-none rounded-lg focus:ring focus:outline-none transition-all block w-full resize-none"
              />
            </div>
            <div>
              <label for="username" class="paragraphStyle">Email *</label>
              <input
                type="text"
                id="username "
                class="text-base text-gray-300 p-4 border shadow-sm bg-gray-800 placeholder:text-gray-500 border-none rounded-lg focus:ring focus:outline-none transition-all block w-full resize-none"
              />
            </div>
            <div>
              <label for="username" class="paragraphStyle">Message *</label>
              <input
                type="text"
                id="username "
                class="text-base text-gray-300 p-4 border shadow-sm bg-gray-800 placeholder:text-gray-500 border-none rounded-lg focus:ring focus:outline-none transition-all block w-full resize-none"
              />
            </div>
            <ButtonItem class="w-full lg:w-max">Submit</ButtonItem>
          </form>
        </div>
        <div class="lg:col-span-2 grid gap-4">
          <InfoHeader> Locations</InfoHeader>
        </div>
      </div>
    </SectionContainer>
  </div>
</template>
