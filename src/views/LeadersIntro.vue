<template>
  <div class="container">
    <template v-for="(item,index) in list" :key="index">
      <div class="leader">
        <div>
          <img :src="item.img" :style="{width: picWidth}" alt="">
        </div>
        <div class="intro-wrap">
          <div class="title"> {{ item.title }}</div>
          <div class="module">负责模块： {{ item.module }}</div>
          <div class="self-intro">
            <strong>自我介绍 </strong>
            <p>{{ item.intro }}</p>
            <strong>寄语</strong>
            <p style="text-align: left;text-indent: 2em;"
            >{{ item.words }}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import store from "@/store"

export default {
	name: "leadersIntro",
	data() {
		return {
			list: [
				{
					img: require("@/assets/leader1.png"),
					title: "爱因社社长",
					module: "技术",
					intro: "大一、大二学年绩点综测均为第一 \n 热爱数学，获得高数、大物省一 \n 高数95左右，大物95+ \n 擅长前后端开发、python爬虫等技术，为社团提供强大的技术支持\n",
					words: "各位小伙伴们，欢迎加入爱因社这个大家庭。我们有丰富多彩的活动、别开生面的讲座。相信大家能学到很多，交到志同道合的朋友。我将和大家一起，迈向更好的明天！"
				},
				{
					img: require("@/assets/leader2.png"),
					title: "爱因社副社长",
					module: "宣传",
					intro: "爱因社前社长 \n 浙江省高等数学竞赛一等奖 \n 浙江省电子商务竞赛一等奖 \n 浙江省证券投资竞赛一等奖 \n 全国大学生英语竞赛二等奖 \n 主持国家级创新创业项目一项 \n 参与浙江省新苗人才计划一项",
					words: "世界上大多事情都没有意义，真理与热爱除外。希望大家在大学社团里可以感受数理的美好！"
				},
				{
					img: require("@/assets/leader3.png"),
					title: "爱因社副社长",
					module: "技术",
					intro: "大一、大二学年绩点综测均为专业第一 \n 热爱数学建模获得浙江省一等奖 \n 主持新苗项目一项 \n 目前研究姿态识别和多模态数据分析",
					words: "欢迎各位热爱数学的小伙伴们加入爱因社这个大家庭。我们不定期开展讲座与讨论，相信在头脑风暴中大家能够收获很多！"
				},
				{
					img: require("@/assets/leader4.png"),
					title: "爱因社副社长",
					module: "宣传",
					intro: "热爱篮球、魔方，校篮球队员 \n 擅长前期宣传、推送制作，提高社团活动的热度和参与度",
					words: "23级的学弟学妹们，爱因社欢迎你的加入。这里大佬云集，各种技术统统不在话下。齐聚于此，探知因果，你还在犹豫什么！"
				},
				{
					img: require("@/assets/leader5.png"),
					title: "爱因社副社长",
					module: "数学",
					intro: "热爱数学，获得高数、大物省三 \n 高数97，大物96 \n 爱好羽毛球 \n 想与爱因社成员共同学习探讨数学",
					words: "欢迎各位友友们加入爱因社！明理博学，格物致知，希望在爱因社与大家共同学习进步，共享美好自由的大学生活！"
				}
			]
		}
	},
	methods: {},
	computed: {
		pageType() {
			return store.state.page.pageType
		},
		picWidth() {
			return this.pageType === "normal" ? "400px" : "200px"
		}
	}
}
</script>

<style lang="less" scoped>
.container {
  display: block;
  width: 50%;
}

.leader {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
}

.intro-wrap {
  padding: 20px;

  .title {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  .module {
    margin-top: 10px;
  }

  .self-intro {
    margin-top: 10px;
    white-space: pre-wrap;
  }
}
</style>