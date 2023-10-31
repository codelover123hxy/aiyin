<template>
  <div class="container">
    <div v-if="pageType==='normal'" style="margin-top: 20px;font-size: 20px;">欢迎报名爱因社干事</div>
    <form action="#">
      <div style="margin-top: 20px;text-align: left;">
        <div style="{display: block}">1.请选择你的感兴趣的组别</div>
        <select id="" class="groups" name="group">
          <option value="math">数学组</option>
          <option value="tech">技术组</option>
          <option value="advertise">宣传组</option>
          <option value="english">英语组</option>
        </select>
      </div>
      <div class="do">

        <div style="{display: block}"> 2.想为爱因社做些什么</div>
        <textarea id="" cols="30" name="" rows="10"

        ></textarea>
      </div>
      <div style="margin-top: 20px;text-align: left;">
        
        <div style="{display: block}"> 3.你期待的活动</div>
        <input v-model="checkedItems" :value="1" name="activity" type="checkbox">别开生面的讲座
        <input v-model="checkedItems" :value="2" name="activity" type="checkbox">学术沙龙
        <input v-model="checkedItems" :value="3" name="activity" type="checkbox">知识竞赛
        <input v-model="checkedItems" :value="4" name="activity" type="checkbox">其他
        <input v-if="isShowOthers" class="others" style="display:inline-flex" type="text">

      </div>

      <Button :background-color="'rgb(23,145,255)'" :color="'white'" :name="'提交'"
              style="margin-top: 30px;" @click="submit"
      ></Button>
    </form>


  </div>
</template>

<script>
import Button from "@/components/Button.vue"
import store from "@/store"

export default {
	name: "applicationIndex",
	data() {
		return {
			isShowOthers: false,
			checkedItems: [],
		}
	},
	components: {
		Button
	},
	methods: {
		submit() {
			// console.log(formData)
		}
	},
	computed: {
		pageType() {
			return store.state.page.pageType
		}
	},
	watch: {
		checkedItems(newValue,) {
			console.log(newValue)
			if (newValue.includes(4)) {
				// console.log(true)
				this.isShowOthers = true
			} else {
				this.isShowOthers = false
			}
		}
	}
}
</script>

<style lang="less" scoped>
.container {
  display: block;
  width: 50%;
  padding: 10px;
}

.groups:focus {
  outline: none;
}

.do {
  align-items: center;
  display: flex;
  margin-top: 20px;

  textarea {
    border: 1 rpx solid black;
    margin-left: 30px;
    border-radius: 10px;
    height: 100px;
    resize: none;
  }

  textarea:focus {
    outline: none;
  }
}


.others {
  width: 100px;
}

.others:focus {
  outline: none;
}


</style>
