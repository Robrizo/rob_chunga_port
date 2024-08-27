<template>
  <!-- page wrapper start -->
  <div
    class="relative max-w-screen mx-auto h-screen lg:p-8 p-4 sm:block lg:px-20 sm:px-8 bg-cover bg-center bg-no-repeat bg-[url('@/assets/img/port.jpg')] dark:bg-[url('@/assets/img/dark_mode.jpg')]"
  >
    <div ref="navbar">
      <!-- nav container -->
      <div>
        <nav
          :class="isNavbarVisible ? 'transform translate-x-0' : 'transform -translate-x-full'"
          class="bg-shadesOfBlue dark:bg-gray-600 fixed left-0 top-0 right-0 bottom-0 transition-all z-10 duration-500 ease-in-out pt-10 pl-8 transform -translate-x-full lg:max-w-60 w-52 sm:block"
        >
          <div class="flex gap-x-12 items-center">
            <!-- close navbar -->
            <button
              class="group mb-4 hover:bg-gray-100 dark:hover:bg-gray-900 p-1.5 rounded-full text-center"
            >
              <span @click="openNavBar" class="cursor-pointer">
                <svg
                  class="w-6 h-6 text-gray-100 rounded-full group-hover:text-shadesOfBlue dark:group-hover:text-gray-100 dark:goup-hover:text-gray-100"
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
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
              </span>
            </button>
            <!-- close navbar end -->
            <!-- dark mode button -->
            <div class="group mb-4">
              <button
                type="button"
                class="hs-dark-mode-active:hidden block hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-gray-900 dark:focus:bg-neutral-800"
                data-hs-theme-click-value="dark"
              >
                <span
                  class="group inline-flex shrink-0 justify-center items-center size-9 text-gray-100 group-hover:text-shadesOfBlue"
                >
                  <svg
                    class="shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                </span>
              </button>
              <button
                type="button"
                class="hs-dark-mode-active:block hidden hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-gray-900 dark:focus:bg-neutral-800"
                data-hs-theme-click-value="light"
              >
                <span
                  class="group inline-flex shrink-0 justify-center items-center size-9 text-gray-100"
                >
                  <svg
                    class="shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </span>
              </button>
            </div>
            <!-- dark mode button end -->
          </div>
          <div>
            <ul>
              <!-- list items start -->
              <div
                @click="openNavBar"
                v-for="item in navItems"
                :key="item.name"
                class="group flex items-center rounded-l-md hover:bg-gray-100 hover:px-3 transition-all decoration-slate-300 ease-in-out"
              >
                <li class="w-full">
                  <a
                    v-scroll-to="item.link"
                    :href="item.link"
                    class="block text-xl font-medium text-gray-100 group-hover:text-shadesOfBlue dark:group-hover:text-gray-800 capitalize py-2"
                  >
                    <span>
                      <i
                        :class="
                          item.icon +
                          ' text-xl pr-2 text-gray-100 group-hover:text-shadesOfBlue dark:group-hover:text-gray-800'
                        "
                      ></i>
                    </span>
                    {{ item.name }}</a
                  >
                </li>
              </div>
              <!-- list items end -->
            </ul>
          </div>
        </nav>
      </div>
      <!-- nav container end -->
      <div class="relative">
        <div :class="isNavbarVisible && 'hidden'" class="absolute left-0">
          <button @click="openNavBar" class="fixed animate-scale">
            <svg
              class="w-8 h-8 text-shadesOfBlue dark:text-mainGray"
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
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
        <SocialIcons pos="absolute right-0" />
      </div>
    </div>
    <slot></slot>
  </div>
  <!-- page wrapper end -->
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SocialIcons from '@/components/SocialIcons.vue'

const isNavbarVisible = ref(false)

const openNavBar = () => {
  isNavbarVisible.value = !isNavbarVisible.value
}

const navItems = ref([
  { name: 'home', icon: 'bx bx-home', link: '#home-section' },
  { name: 'about', icon: 'bx bx-user', link: '#about-section' },
  { name: 'expertise', icon: 'bx bx-category', link: '#skill-section' },
  { name: 'projects', icon: 'bx bx-layer', link: '#projects-section' },
  { name: 'contact', icon: 'bx bx-phone', link: '#contact-section' }
])

const closeNavBar = (event) => {
  if (navbar.value && !navbar.value.contains(event.target)) {
    isNavbarVisible.value = false
  }
}

const updateTitle = (sectionId) => {
  let title = 'Robert Chunga'
  if (sectionId === 'about-section') {
    title = 'Robert Chunga - About'
  } else if (sectionId === 'skill-section') {
    title = 'Robert Chunga - Expertise'
  } else if (sectionId === 'projects-section') {
    title = 'Robert Chunga - Projects'
  } else if (sectionId === 'contact-section') {
    title = 'Robert Chunga - Contact'
  }
  document.title = title
}

const observeSections = () => {
  const sections = document.querySelectorAll('div[id]')
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id
        updateTitle(sectionId)
      }
    })
  }, options)

  sections.forEach((section) => {
    observer.observe(section)
  })
}

const navbar = ref(null)

onMounted(() => {
  document.addEventListener('click', closeNavBar), observeSections()
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeNavBar)
})
</script>
