import './assets/main.css'
import 'preline/preline'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'

const app = createApp(App)

// Register vue-scrollto
app.use(VueScrollTo, {
  duration: 1000, // Customize the duration (in ms)
  easing: 'ease-in-out', // Choose an easing function
})

.use(router)

app.mount('#app')
