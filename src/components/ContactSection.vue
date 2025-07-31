<script setup lang="ts">
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <div class="max-w-screen mx-auto lg:py-8 py-4 lg:px-36 px-20 dark:bg-gray-800">
    <!-- section title -->
    <SectionTitle section-heading="get in touch" />
    <div class="my-12 lg:px-24 flex items-center justify-center">
      <div class="w-full md:w-max-2xl">
        <form action="https://formspree.io/f/mknlkvvj" method="POST">
          <div class="grid sm:grid-cols-3 gap-4">
            <div>
              <label class="capitalize text-lg dark:text-mainGray" for="name">name</label>
              <input
                type="text"
                name="name"
                placeholder="your name"
                class="border border-gray-300 focus:border-shadesOfBlue focus:ring-shadesOfBlue rounded-md p-3 w-full placeholder:capitalize dark:placeholder:text-gray-400 dark:bg-gray-600 dark:text-mainGray dark:caret-mainGray"
                required
              />
            </div>
            <div>
              <label class="capitalize text-lg dark:text-mainGray" for="email">email</label>
              <input
                type="email"
                name="email"
                placeholder="email address"
                class="border border-gray-300 focus:border-shadesOfBlue focus:ring-shadesOfBlue rounded-md p-3 w-full placeholder:capitalize dark:placeholder:text-gray-400 dark:bg-gray-600 dark:text-mainGray dark:caret-mainGray"
                required
              />
            </div>
            <div>
              <label class="capitalize text-lg dark:text-mainGray" for="subject">subject</label>
              <input
                type="text"
                name="subject"
                placeholder="subject"
                class="border border-gray-300 focus:border-shadesOfBlue focus:ring-shadesOfBlue rounded-md p-3 w-full placeholder:capitalize dark:placeholder:text-gray-400 dark:bg-gray-600 dark:text-mainGray dark:caret-mainGray"
                required
              />
            </div>
            <div class="sm:col-span-3">
              <label class="capitalize text-lg dark:text-mainGray" for="msg">message</label>
              <textarea
                rows="4"
                placeholder="type your message..."
                class="border border-gray-300 focus:border-shadesOfBlue focus:ring-shadesOfBlue rounded-md p-3 w-full placeholder:capitalize dark:placeholder:text-gray-400 dark:bg-gray-600 dark:text-mainGray dark:caret-mainGray resize-none"
                name="msg"
                id="msg"
                required
              ></textarea>
            </div>
          </div>
          <div class="text-center mt-4">
            <button
              type="submit"
              class="bg-shadesOfBlue text-white capitalize p-2.5 px-4 rounded-lg hover:bg-white hover:ring-2 hover:ring-shadesOfBlue hover:text-shadesOfBlue duration-300"
            >
              send message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
