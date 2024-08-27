<template>
  <div class="max-w-screen mx-auto lg:py-8 py-4 lg:px-36 px-20 dark:bg-gray-800">
    <!-- section title -->
    <SectionTitle />
    <div
      class="flex items-center justify-center my-12 rounded-full w-32 sm:w-40 outline outline-offset-4 outline-shadesOfBlue overflow-hidden mx-auto shadow-lg"
    >
      <img
        class="hover:scale-125 hover:opacity-60 transition-all duration-500 hover:ease-in-out"
        :src="image"
        alt="image"
      />
    </div>
    <div class="grid lg:grid-cols-2 gap-8 my-8 sm:grid-cols-1">
      <div>
        <div class="text-shadesOfBlue md:text-3xl text-xl capitalize">
          <h3 class="font-semibold">{{ aboutHeading }}</h3>
          <div class="text-secondaryColor text-base normal-case py-4 dark:text-mainGray">
            <p>
              {{ profileText }}
              <span class="font-bold italic">{{ spannedProfileText }}</span>
            </p>
          </div>
        </div>
        <div class="grid 2xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-y-4 mt-2">
          <div class="flex items-center">
            <span class="mr-2 text-shadesOfBlue">
              <svg
                class="w-[28px] h-[28px] border border-shadesOfBlue rounded-full p-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                />
              </svg>
            </span>
            <div class="sm:flex items-center capitalize dark:text-mainGray">
              <h3 class="font-medium mr-2">{{ locationHeading }}</h3>
              <p>{{ locationText }}</p>
            </div>
          </div>
          <div class="flex items-center">
            <span class="mr-2 text-shadesOfBlue">
              <svg
                class="w-[28px] h-[28px] border border-shadesOfBlue rounded-full"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                />
              </svg>
            </span>
            <div class="sm:flex items-center capitalize dark:text-mainGray">
              <h3 class="font-medium mr-2">{{ contactHeading }}</h3>
              <p>{{ contactText }}</p>
            </div>
          </div>
          <div class="flex items-center">
            <span class="mr-2 text-shadesOfBlue">
              <svg
                class="w-[28px] h-[28px] border border-shadesOfBlue rounded-full p-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
            </span>
            <div class="sm:flex items-center capitalize dark:text-mainGray">
              <h3 class="font-medium mr-2">{{ emailHeading }}</h3>
              <p class="normal-case">{{ emailText }}</p>
            </div>
          </div>
        </div>
        <div class="my-6">
          <a
            :href="my_cv"
            class="group w-fit flex items-center gap-x-2 bg-shadesOfBlue text-white capitalize p-2.5 px-4 rounded-lg hover:bg-white hover:ring-2 hover:ring-shadesOfBlue hover:text-shadesOfBlue duration-300"
            download="Robert_Chunga_CV"
          >
            {{ downloadText }}
            <span>
              <svg
                class="w-6 h-6 text-white text-lg group-hover:text-shadesOfBlue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div>
        <div class="text-shadesOfBlue md:text-3xl text-xl font-semibold capitalize">
          <h3>{{ techHeading }}</h3>
        </div>
        <div class="py-4">
          <ProgressBar />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import ProgressBar from './ProgressBar.vue'
import image from '@/assets/img/rjc_pic.jpg'
import my_cv from '@/assets/rob_cv.pdf'
import SectionTitle from './SectionTitle.vue'

const aboutHeading = ref("hi there!, i'm robert chunga")
const profileText = ref(
  'I am a second-year ICT student at Mzuzu University with a strong foundation in web development and design. My skills include HTML/CSS3, JavaScript, Vue.js, Tailwind CSS, and Laravel, allowing me to create responsive, user-friendly web applications. I also have experience in graphic design using Photoshop, which complements my ability to deliver visually appealing and functional digital solutions. I am passionate about learning new technologies and continuously improving my skill set to stay at the forefront of the industry.'
)
const spannedProfileText = ref(
  "Let's connect and explore opportunities to drive digital transformation together!"
)
const locationHeading = ref('location :')
const locationText = ref('mzuzu, malawi')
const contactHeading = ref('phone :')
const contactText = ref('+265 882 216 979')
const emailHeading = ref('email :')
const emailText = ref('robertchungah@gmail.com')
const downloadText = ref('download CV')
const techHeading = ref('technology proficiency')
</script>
