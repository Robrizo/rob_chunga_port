<template>
  <!-- page heading -->
  <div class="h-screen flex flex-col items-center justify-center">
    <div
      class="lg:text-6xl sm:text-3xl text-xl text-center capitalize animate-bounce font-bold text-shadesOfBlue mb-2"
    >
      <h2>{{ headingText }}</h2>
    </div>
    <div>
      <!-- type effect -->
      <TypingEffect />
    </div>
    <div class="text-center flex items-center justify-center">
      <a
        v-scroll-to="'#about-section'"
        href="#about-section"
        class="uppercase text-lg tracking-wider text-white font-normal mt-16 bg-shadesOfBlue p-2 px-10 rounded-xl duration-300 ease-in-out hover:scale-110 outline-none outline-shadesOfBlue outline-offset-4 cursor-pointer hover:opacity-90"
        >{{ buttonText }}
      </a>
    </div>
  </div>
  <!-- page heading end -->
</template>

<script setup>
import { ref } from 'vue'
import TypingEffect from '@/components/TypingEffect.vue'

const headingText = ref("hi! I'm Robert Chunga")
const buttonText = ref('explore')
</script>
