<template>
    <div class="container">
        <template v-for="(item,index) in list" :key="index">
            <div class="activ-item">
                <a :href="`#/feature/article?number=${index}`" style="text-decoration: none;">{{ item.title }}</a>
                <span>{{ item.time }}</span>
            </div>
        </template>
    </div>
</template>

<script>
export default{
	name:"pushIndex",
	data(){
		return{
			list:[
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
	methods:{

	}
}
</script>

<style scoped lang="less">
    .container{
        display: block;
        width:50%;
        padding: 20px;
    }
    .activ-item{
        display: flex;
        justify-content: space-between;
        height:50px;
        line-height:50px;
        a{
            color:black
        }
        a:hover{
            color:rgb(255, 95, 95)
        }
    }
</style>