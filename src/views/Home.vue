<template>
  <div style="overflow: hidden;">
    <Swiper></Swiper>
    <div style="position: relative;overflow: hidden;">
      <img alt="news"
           src="@/assets/icon-news1.png"
           style="float:left;z-index:1;position: relative"
           width="300">
      <img alt=""
           src="@/assets/icon-news2.png"
           style="margin-left:-700px;margin-top:60px;z-index:-1;"
           width="500">
      <h4 class="latest-news">最新动态</h4>
    </div>
    <div class="circle-nav">
      <circle-nav :chinese-text="'活动新闻'" :color="'blue'" :english-text="'News of aiyin club events'"
                  :radius="'100'" class="one"
                  @click="this.$router.push({path:'/feature/latest'})"></circle-nav>
      <circle-nav :chinese-text="'社团成果'" :color="'blue'" :english-text="'Achievements of aiyin club'"
                  :radius="'120'" class="two"
                  @click="this.$router.push({path:'/achievement'})"></circle-nav>
      <circle-nav :chinese-text="'加入我们'" :color="'blue'" :english-text="'Join us aiyin club'"
                  :radius="'180'" class="three"
                  @click="this.$router.push({path:'/join/advertise'})"></circle-nav>
    </div>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper.vue"
import CircleNav from "@/components/CircleNav.vue"

export default {
	name: "homeIndex",
	data() {
		return {}
	},
	components: {
		Swiper,
		CircleNav
	},
	methods: {}
}
</script>

<style scoped>
.latest-news {
  position: absolute;
  z-index: 3;
  top: 60px;
  left: 450px;
  color: white;
}

.circle-nav {
  position: relative;
  display: block;
  width: 500px;
  height: 320px;
  margin-left: 1000px;
  margin-top: -200px;
  z-index: 2;
}

.one {
  position: absolute;
  left: 50px;
  top: 150px;
}

.two {
  position: absolute;
  left: 150px;
  top: 10px;
}

.three {
  position: absolute;
  left: 300px;
  top: 120px;
}
</style>