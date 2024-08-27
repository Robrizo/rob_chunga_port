<template>
  <div class="max-w-screen mx-auto lg:py-8 py-4 lg:px-36 px-20 bg-gray-100 dark:bg-gray-700">
    <!-- section title -->
    <SectionTitle section-heading="expertise" />
    <div
      class="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-12 gap-x-14 py-16"
    >
      <!-- skill card -->
      <SkillCard v-for="(skill, index) in skills" :key="index">
        <div
          class="bg-shadesOfBlue flex justify-center items-center w-20 h-20 md:w-28 md:h-28 rounded-full absolute mx-auto right-0 left-0 -top-10 md:-inset-y-14 border-4 border-slate-200 group-hover:bg-white group-hover:shadow-md transform duration-300"
        >
          <span>
            <svg
              class="w-6 h-6 md:w-12 md:h-12 text-white group-hover:text-shadesOfBlue transform duration-300"
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
                :d="skill.svgPath"
              />
            </svg>
          </span>
        </div>
        <div class="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
          <div>
            <h2
              class="text-lg md:text-xl capitalize font-bold text-shadesOfBlue my-4 md:my-8 dark:text-gray-100"
            >
              {{ skill.title }}
            </h2>
          </div>
        </div>
      </SkillCard>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
import SkillCard from './SkillCard.vue'


const skills = [
  {
    title: 'web design',
    svgPath: 'M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z',
  },
  {
    title: 'graphic design',
    svgPath: 'M11 18h2M5.875 3h12.25c.483 0 .875.448.875 1v16c0 .552-.392 1-.875 1H5.875C5.392 21 5 20.552 5 20V4c0-.552.392-1 .875-1Z',
  },
  {
    title: 'UI/UX design',
    svgPath: 'M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28',
  },
  {
    title: 'web development',
    svgPath: 'M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z',
  },
]
</script>
