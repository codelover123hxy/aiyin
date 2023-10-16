<template>
    <div class="container">        
        <side-bar :list="activityList" :root-url="rootUrl"></side-bar>
        <router-view class="right-view"></router-view>
    </div>
</template>

<script>
    import SideBar from '@/components/SideBar.vue'

    export default{
        name:'featureIndex',
        data(){
            return{
                rootUrl:'/feature',
                activityList:[
                    {
                        title:'最新活动',
                        url:'latest'
                    },
                    {
                        title:'过往风采',
                        url:'previous'
                    },
                    {
                        title:'社团推送',
                        url:'push'
                    }
                ]
            }
        },
        components:{
            SideBar
        },  
        methods:{
            
        }
    }
</script>

<style scoped lang="less">
    .container{
        display: flex;
        justify-content: space-evenly;
    }
</style>