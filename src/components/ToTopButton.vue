<template>
  <!-- to top button -->
  <div>
    <button v-if="showScrollToTop" @click="scrollToTop" class="fixed bottom-5 right-3 bg-gradient-to-t bg-shadesOfBlue dark:bg-gray-500 border-2 border-mainGray px-1 py-1 transition duration-300 ease-in-out rounded-md opacity-90 hover:opacity-100 translate-y-0">
      <svg
        class="w-6 h-6 text-gray-100 dark:text-white"
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
          d="m5 15 7-7 7 7"
        />
      </svg>
    </button>
  </div>
  <!-- to top button end -->
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showScrollToTop = ref(false)

// Scroll event handler
const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 100
}

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
