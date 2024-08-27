<template>
  <div v-for="skill in skills" :key="skill.name" class="mb-3">
    <div class="flex justify-between mb-1">
      <span class="text-base text-secondaryColor dark:text-gray-100 capitalize">
        {{ skill.name }}
      </span>
      <span class="text-sm text-shadesOfBlue font-semibold dark:text-gray-100">
        {{ skill.percentage }}%
      </span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
      <div
        class="bg-shadesOfBlue h-2.5 rounded-full"
        :style="{ width: skill.percentage + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'HTML/CSS3', percentage: 90 },
  { name: 'Tailwind CSS', percentage: 80 },
  { name: 'Photoshop', percentage: 75 },
  { name: 'JavaScript', percentage: 45 },
  { name: 'Vue.js', percentage: 40 },
  { name: 'Laravel', percentage: 30 }
])
</script>
