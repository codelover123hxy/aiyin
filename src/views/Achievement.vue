<template>
  <div :class="[pageType==='normal'? 'container' : 'container-mobile']">
    <Prize v-for="(item,index) in list" :key="index" :class="[pageType==='normal'? '' : 'mobile-prize']"
           :color="item.color" :icon="item.icon" :name="item.name"
           :num="item.num"
    />
  </div>
</template>

<script>
import Prize from "@/components/Prize.vue"
import store from "@/store"

export default {
	name: "clubAchievement",
	components: {
		Prize
	},
	data() {
		return {
			list: [
				{
					color: "rgb(65,84,124)",
					icon: "url(" + require("@/assets/icon1.png") + ")",
					name: "新苗人才计划立项",
					num: 2
				},
				{
					color: "rgb(135,149,179)",
					icon: "url(" + require("@/assets/icon2.png") + ")",
					name: "国家级创新创业立项",
					num: 2
				},
				{
					color: "rgb(75,80,91)",
					icon: "url(" + require("@/assets/icon3.png") + ")",
					name: "学术论文",
					num: 2
				},
				{
					color: "rgb(88,141,203)",
					icon: "url(" + require("@/assets/icon4.png") + ")",
					name: "竞赛获奖",
					num: 16
				}
			]
		}
	},
	methods: {},
	computed: {
		pageType() {
			return store.state.page.pageType
		}
	},
}
</script>

<style scoped>
.container {
  display: flex;
  width: 70%;
  justify-content: space-around;
  height: 200px;
  /* width:50%; */
  padding: 100px;
}

.container-mobile {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.mobile-prize {
  left: -80px;
  position: relative;
}
</style>