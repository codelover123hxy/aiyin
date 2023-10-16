<template>
    <div class="container">        
        <side-bar :list="activityList" :root-url="rootUrl"></side-bar>
        <router-view class="right-view"></router-view>
    </div>
</template>

<script>
    import SideBar from '@/components/SideBar.vue'

    export default{
        name:'joinUs',
        data(){
            return{
                rootUrl:'/join',
                activityList:[
                    {
                        title:'加入qq群',
                        url:'advertise'
                    },
                    {
                        title:'报名干事',
                        url:'apply'
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