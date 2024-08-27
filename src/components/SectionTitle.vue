<template>
  <div
    class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
  >
    <h3
      class="mx-4 mb-0 text-center dark:text-mainGray capitalize md:text-4xl text-2xl font-bold text-shadesOfBlue"
    >
      {{ sectionHeading }}
    </h3>
  </div>
</template>

<script setup>
defineProps({
  sectionHeading: {
    type: String,
    default: 'about'
  }
})
</script>
