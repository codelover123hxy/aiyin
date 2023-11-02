<template>
  <div class="container">
    <template v-for="(item,index) in list" :key="index">
      <div class="activ-item">
        <a :href="`#/feature/article?number=${index}`" style="text-decoration: none;">{{ item.title }}</a>
        <div id="con">
          <span id="text" class="date">{{ item.time }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
	name: "pushIndex",
	data() {
		return {
			list: [
				{
					title: "社团介绍|爱因社：爱因挠头方知果，思坦论之果成因",
					time: "2022-09-24"
				},
				{
					title: "学在理学院 | 数学可视化虚拟平台",
					time: "2022-09-30"
				},
				{
					title: "活动预告|数据分析与SPSS应用",
					time: "2022-10-01"
				},

				{
					title: "活动预告|神秘嘉宾来袭，你的“研”途不迷茫（内含创新创业pu)",
					time: "2022-10-12"
				},
				{
					title: "爱因社&数模协会 前端三件套和vue入门讲座（内含双创pu）",
					time: "2022-11-21"
				},
				{
					title: "数理文化节 | What Shape is the World？（内含双创pu）",
					time: "2023-03-27"
				},
				{
					title: "爱因社&教科学院 朋辈课堂 | 向量的线性关系（内含双创pu）",
					time: "2023-04-28"
				},
				{
					title: " 爬虫入门与Chatgpt应用（内含双创pu）",
					time: "2023-04-30"
				}
			]
		}
	},
	// methods: {
	// 	resizeFontSize() {
	// 		let fontSize = 15 // 初始字体大小
	// 		let textWidth = 0 // 文本宽度
	// 		let containerWidth = document.getElementById("con").offsetWidth - 20// 容器宽度
	// 		// console.log(document.getElementById("con"))
	// 		do {
	// 			fontSize -= 0.1
	// 			document.getElementById("text").style.fontSize = fontSize + "px"
	// 			// console.log(document.getElementById("text"))
	// 			console.log(document.getElementById("text").innerText.length)
	// 			textWidth = document.getElementById("text").innerText.length * fontSize
	// 			console.log(textWidth, containerWidth)
	// 		} while (textWidth > containerWidth)
	// 	}
	// },
	// mounted() {
	// 	this.resizeFontSize()
	// 	window.addEventListener("resize", this.resizeFontSize)
	// }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
}

.activ-item {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  font-size: clamp(0.7rem, 0.489rem + 1.05vw, 1rem);

  a {
    color: black;
  }

  a:hover {
    color: rgb(255, 95, 95)
  }
}

.date {
  margin-left: 20px;
}
</style>