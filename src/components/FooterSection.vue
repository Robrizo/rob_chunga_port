<template>
  <footer class=" bg-gray-800 dark:bg-gray-700 py-12">
    <SocialIcons />
    <div class="text-center text-sm font-light sm:text-base text-gray-200 mt-6 px-4">
      <p>{{ footerText }}</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import SocialIcons from '@/components/SocialIcons.vue'

const footerText = ref('Copyright © Robert Chunga 2024. All rights reserved')
</script>

