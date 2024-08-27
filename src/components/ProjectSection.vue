<template>
  <div class="max-w-screen mx-auto lg:py-8 py-4 lg:px-36 px-20 bg-gray-200 dark:bg-gray-600">
    <!-- section title -->
    <SectionTitle section-heading="latest projects" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 my-12">
      <!-- project card -->
      <div v-for="project in projects" :key="project.id" class="group drop-shadow-lg">
        <div class="overflow-hidden relative rounded-t-lg">
          <img
            :src="project.projectImageLink"
            class="h-full w-full group-hover:scale-125 object-cener object-cover duration-500"
            alt="project image"
          />
          <div class="bg-shadesOfBlue w-fit px-4 py-1 rounded-l-lg absolute top-0 right-0">
            <p class="capitalize text-gray-100">{{ project.projectType }}</p>
          </div>
        </div>
        <div class="bg-white p-4 rounded-b-lg dark:bg-gray-800">
          <div>
            <h2 class="capitalize text-2xl text-shadesOfBlue dark:text-gray-100 font-bold">
              {{ project.projectTitle }}
            </h2>
          </div>
          <div class="mt-2 mb-5">
            <p class="text-gray-800 dark:text-mainGray">
              {{ project.projectDescription }}
            </p>
          </div>
          <div class="mb-2">
            <a
              class="bg-shadesOfBlue text-white capitalize p-2.5 px-4 rounded-lg hover:bg-white hover:ring-2 hover:ring-shadesOfBlue hover:text-shadesOfBlue duration-300"
              :href="project.projectLink"
              target="_blank"
              >view project</a
            >
          </div>
        </div>
      </div>
      <!-- project card end -->
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import projectData from '@/projects.json'

const projects = ref(projectData)

</script>
