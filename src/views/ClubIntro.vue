<template>
  <div class="container">
    <div style="display: flex;align-items: center;flex-direction: column">
      <img alt="" src="@/assets/aiyin-logo.png"
           style="margin: 20px;"
           width="100">
      <p>
        {{ intro }}
      </p>
    </div>
    <span style="font-weight: 700">爱因社的标语: </span>
    <span>爱因挠头方知果，思坦论之果成因。</span>

    <div style="text-align: left;
            font-size: 20px;margin-top: 30px;
        ">社团组织：
    </div>
    <img alt="" class="mobile-pic" src="@/assets/aiyin-group.png"
         width="650">

  </div>
</template>

<script>
export default {
	name: "clubIntro",
	data() {
		return {
			intro: "爱因社是由挠头讨论社与理学院基础数学与可视化研究团两大古老社团共同融合而来。爱因社，作为隶属于理学院的最重要的社团之一，致力于为对理学以及相关领域感兴趣的同学们提供一个共同学习知识、技能的平台。在社团中同学们既可以选择自己感兴趣的前沿知识互相讨论学习，又可以将所学的平面静态的知识进行动态可视化。"
		}
	},
	methods: {}
}
</script>

<style scoped>
.container {
  display: block;
  width: 50%;
  position: relative;
}

p {
  text-align: left;
  text-indent: 2em;
}

.mobile-pic {
  position: relative;
  margin-top: 50px;
  left: -170px;
  width: 400px;
  height: 200px;
}
</style>