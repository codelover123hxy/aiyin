<template>
  <div class="container">
    <div>
      <div>
        <div>爱因社qq群 <span style="margin-left:25px">群号:685723772</span></div>
        <img alt="" height="250" src="@/assets/qq.png" style="margin-top:20px">
      </div>
      <div>
        <div>爱因社微信公众号</div>
        <img alt="" height="250" src="@/assets/aiyin-wechat.png" style="margin-top:20px">
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store"

export default {
	name: "advertiseIndex",
	data() {
		return {}
	},
	methods: {},
	computed: {
		pageType() {
			return store.state.page.pageType
		}
	}
}
</script>

<style lang="less" scoped>
// .container{
//     padding: 20px;
//     width: 700px;
//     margin:0 auto;
// }
.container {
  position: relative;
  display: block;
  width: 50%;
  padding: 10px;
}

</style>