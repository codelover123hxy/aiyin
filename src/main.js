import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'

createApp(App).use(VueAwesomeSwiper).use(router).mount('#app')
