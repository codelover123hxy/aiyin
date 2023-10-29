import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router"
import store from "@/store"
import VueAwesomeSwiper from "vue-awesome-swiper"
import "swiper/css"

createApp(App).use(VueAwesomeSwiper).use(store).use(router).mount("#app")
