<template>
  <div class="text-center flex items-center justify-center">
    <span
      class="lg:text-2xl capitalize text-shadesOfBlue tracking-wider text-center text-[20px] font-normal dark:text-mainGray"
    >
      {{ displayText }}</span
    >
    <span class="animate-blink ml-[2px] text-[1.5rem] text-shadesOfBlue dark:text-mainGray">|</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const texts = ['front-end developer', 'web developer', 'web designer', 'graphic designer']

const displayText = ref('')
const currentTextIndex = ref(0)
const currentCharIndex = ref(0)
const isDeleting = ref(false)
const speed = 100
const deleteSpeed = 50
const pauseTime = 1000

const type = () => {
  const currentText = texts[currentTextIndex.value]
  if (isDeleting.value) {
    displayText.value = currentText.substring(0, currentCharIndex.value - 1)
    currentCharIndex.value--
  } else {
    displayText.value = currentText.substring(0, currentCharIndex.value + 1)
    currentCharIndex.value++
  }

  if (!isDeleting.value && currentCharIndex.value === currentText.length) {
    setTimeout(() => (isDeleting.value = true), pauseTime)
  } else if (isDeleting.value && currentCharIndex.value === 0) {
    isDeleting.value = false
    currentTextIndex.value = (currentTextIndex.value + 1) % texts.length
  }

  setTimeout(type, isDeleting.value ? deleteSpeed : speed)
}

onMounted(() => {
  type()
})
</script>

