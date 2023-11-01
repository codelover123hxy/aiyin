<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <swiper
      :auto-height="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :centeredSlides="true"
      :loop="true"
      :modules="modules"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :resize-observer="true"
      :slidesPerView="1"
      :spaceBetween="600"
      class="mySwiper"
  >
    <swiper-slide v-for="(item, index) in showPic" :key="index">
      <div class="flex" style="width: 100%;height: 400px;">
        <img
            :src="item.imagePath"
            style="height: 400px;width:fit-content"
        />

      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import {computed, getCurrentInstance, reactive} from "vue"
import store from "@/store"
import {Swiper, SwiperSlide} from "swiper/vue" // swiper所需组件
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import {A11y, Autoplay, Navigation, Pagination} from "swiper"
// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const modules = [Autoplay, Pagination, Navigation, A11y]

const {proxy} = getCurrentInstance()
console.log("url", proxy.$imgApi)

// 描述字段
let data = reactive({
	imgListPc: [
		{
			imagePath: require("../assets/old-time.png")
		},
		{
			imagePath: require("../assets/aiyin-game.png")
		},
		{
			imagePath: require("../assets/aiyin-game2.png")
		},
		{
			imagePath: require("../assets/mobile1.jpg")
		},
		{
			imagePath: require("../assets/mobile2.jpg")
		},
		{
			imagePath: require("../assets/mobile3.jpg")
		},
	],
	imgListMobile: [
		{
			imagePath: require("../assets/mobile1.jpg")
		},
		{
			imagePath: require("../assets/mobile2.jpg")
		},
		{
			imagePath: require("../assets/mobile3.jpg")
		},
	]
})

const showPic = computed(() => {
	return store.state.page.pageType === "normal" ? data.imgListPc : data.imgListMobile
})

</script>
<style lang="less" scoped>
.img {
  width: 400px;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
  }
}

.mySwiper {
  width: 100%;
  background: #ffffff;
  height: 400px;
  margin: 20px 0;
  border-radius: 10px;
}
</style>
