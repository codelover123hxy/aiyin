<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :centeredSlides="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide v-for="(item, index) in data.imgList" :key="index">
      <div style="width: 100%;height: 400px;" class="flex">
        <img
            style="height: 400px;width:fit-content"
            :src="item.imagePath"
        />

      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { reactive, getCurrentInstance } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue"; // swiper所需组件
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const modules = [Autoplay, Pagination, Navigation, A11y];

const { proxy } = getCurrentInstance();
console.log("url", proxy.$imgApi);

// 描述字段
let data = reactive({
  imgList: [
    {
      imagePath: require('../assets/old-time.png')
    },
    {
      imagePath: require('../assets/aiyin-game.png')
    },
    {
      imagePath: require('../assets/aiyin-game2.png')
    },
  ],
});
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
  margin:20px 0;
  border-radius: 10px;
}
</style>
