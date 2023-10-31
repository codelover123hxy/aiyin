<template>
  <div class="container">
    <side-bar :list="introList" :root-url="rootUrl" class="side-bar"></side-bar>
    <router-view class="right-view"></router-view>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue"

export default {
	name: "introIndex",
	components: {SideBar},
	data() {
		return {
			rootUrl: "/intro",
			introList: [
				{
					title: "社团简介",
					url: "club"
				},
				{
					title: "负责人介绍",
					url: "leaders"
				}
			]
		}
	},
	methods: {}
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  display: flex;
  justify-content: space-evenly;
}

.side-bar {
  position: relative;
}
</style>