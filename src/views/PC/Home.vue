<template>
    <div style="overflow: hidden;">
        <Swiper></Swiper>        
        <div style="position: relative;overflow: hidden;">
            <img src="@/assets/icon-news1.png" 
            alt="news"
            width="300"
            style="float:left;z-index:1;position: relative">
            <img src="@/assets/icon-news2.png"
            width="500"
            style="margin-left:-700px;margin-top:60px;z-index:-1;"
            alt="">
            <h4 class="latest-news">最新动态</h4>
        </div>
        <div class="circle-nav">
                <circle-nav class="one" :color="'blue'" :chinese-text="'活动新闻'"
                :radius="'100'" @click="this.$router.push({path:'/feature/latest'})"
                :english-text="'News of aiyin club events'"></circle-nav>
                <circle-nav class="two" :color="'blue'" :chinese-text="'社团成果'"
                :radius="'120'" @click="this.$router.push({path:'/achievement'})"
                :english-text="'Achievements of aiyin club'"></circle-nav>
                <circle-nav class="three" :color="'blue'" :chinese-text="'加入我们'"
                :radius="'180'" @click="this.$router.push({path:'/join/advertise'})"
                :english-text="'Join us aiyin club'"> </circle-nav>
        </div>
    </div>
</template>

<script>
    import Swiper from '@/components/Swiper.vue'
    import CircleNav from '@/components/CircleNav.vue';
    export default {
        name:'homeIndex',
        data(){
            return{

            }
        },
        components:{
            Swiper,
            CircleNav
        },
        methods:{
            
        }
    }
</script>

<style scoped>
    .latest-news{
        position: absolute;
        z-index:3;
        top:60px;
        left:450px;
        color:white;
    }
    .circle-nav{
        position: relative;
        display:block;
        width: 500px;
        height: 320px;
        margin-left:1000px;
        margin-top: -200px;
        z-index: 2;
    }
    .one{
        position: absolute;
        left: 50px;
        top: 150px;
    }
    .two{
        position: absolute;
        left: 150px; 
        top: 10px;
    } 

    .three{
        position: absolute;
        left: 300px;
        top: 120px;
    }
</style>