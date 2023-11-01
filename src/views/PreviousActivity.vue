<template>
  <div class="container">
    <div>2022-2023</div>
    <div class="lecture">精彩讲座</div>
    <img :style="{width: picSize2}" alt="" src="@/assets/calendar.png">
    <div class="moment">美妙瞬间</div>
    <div style="display: flex;justify-content: space-evenly;">
      <img :style="{width: picSize1}" alt="" src="@/assets/moment1.png">
      <img :style="{width: picSize1}" alt="" src="@/assets/moment2.png">
    </div>
  </div>
</template>

<script>
import store from "@/store"

export default {
	name: "previousActivity",
	data() {
		return {}
	},
	methods: {},
	computed: {
		pageType() {
			return store.state.page.pageType
		},
		picSize1() {
			return this.pageType === "normal" ? "400px" : "100px"
		},
		picSize2() {
			return this.pageType === "normal" ? "600px" : "300px"
		}
	}
}
</script>

<style lang="less" scoped>
.container {
  display: block;
  width: 50%;
  padding: 20px;
}

.lecture, .moment {
  margin: 20px 0;
}

</style>