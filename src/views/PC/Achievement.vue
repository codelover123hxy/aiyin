<template>
    <div class="container">
        <Prize :key="index" v-for="(item,index) in list" 
        :color="item.color" :num="item.num" :icon="item.icon" :name="item.name"></Prize>
    </div>
</template>

<script>
    import Prize from '@/components/Prize.vue'
    export default{
        name:'clubAchievement',
        components:{
            Prize
        },
        data(){
            return{
                list:[
                    {
                        color:'rgb(65,84,124)',
                        icon:'url(' + require('@/assets/icon1.png') + ')',
                        name:'新苗人才计划立项',
                        num:2
                    },
                    {
                        color:'rgb(135,149,179)',
                        icon:'url(' + require('@/assets/icon2.png') + ')',
                        name:'国家级创新创业立项',
                        num:2
                    },
                    {
                        color:'rgb(75,80,91)',
                        icon:'url(' + require('@/assets/icon3.png') + ')',
                        name:'学术论文',
                        num:2
                    },
                    {
                        color:'rgb(88,141,203)',
                        icon:'url(' + require('@/assets/icon4.png') + ')',
                        name:'竞赛获奖',
                        num:16
                    }
                ]
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
    .container{ 
        display: flex;
        width:70%;
        justify-content: space-around;
        height: 200px;
        /* width:50%; */
        padding: 100px;        
    }
</style>