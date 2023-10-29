<template>
    <div class="container">
       <div class="title">{{ article.title }}</div>
       <div class="time">时间: {{ article.time }}</div>
    </div>
</template>

<script>
export default{
	name:"articleIndex",
	data(){
		return{
			article:"",
			articles:[
				{
					title:"社团介绍|爱因社：爱因挠头方知果，思坦论之果成因",
					time:"2022-09-24"
				},
				{
					title:"学在理学院 | 数学可视化虚拟平台",
					time:"2022-09-30"
				},
				{
					title:"活动预告|数据分析与SPSS应用",
					time:"2022-10-01"
				},

				{
					title:"活动预告|神秘嘉宾来袭，你的“研”途不迷茫（内含创新创业pu)",
					time:"2022-10-12"
				},
				{
					title:"爱因社&数模协会 前端三件套和vue入门讲座（内含双创pu）",
					time:"2022-11-21"
				},
				{
					title:"数理文化节 | What Shape is the World？（内含双创pu）",
					time:"2023-03-27"
				},
				{
					title:"爱因社&教科学院 朋辈课堂 | 向量的线性关系（内含双创pu）",
					time:"2023-04-28"
				},
				{
					title:" 爬虫入门与Chatgpt应用（内含双创pu）",
					time:"2023-04-30"
				}
			]
		}
	},
	created(){
		var num = this.$route.query.number
		console.log(num)
		this.article = this.articles[num]
	},
	methods:{

	}
}
</script>

<style scoped>
    .container{
        display: block;
        width:50%;
        padding: 20px;
    }

    .title{
        font-size:20px;
        font-weight: bold;
    }
    .time{
        font-size: 15px;
        margin-top:15px;
    }
</style>