<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container" >
        <div @click="goHome" class="aiyin-logo">
            <img src="../assets/aiyin-logo.png" alt="aiyin" height="60">
            <h1 class="title">爱 因 社</h1>
            <div class="slogan">
                <h5>
                    爱因挠头方知果
                </h5>
                <h5 style="margin-top:-10px">
                    思坦论之果成因
                </h5>
            </div>
        </div>
        <NavBar></NavBar>
    </div>
</template>

<script>
// import Button from '@/components/Button.vue'
import NavBar from '@/components/NavBar.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            // Button
            NavBar
        },
        methods:{
            goHome(){
                this.$router.push({
                    path:'/home'
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .container{
        display: flex;
        width: 100%;
        align-items: center;
        padding: 0 100px;
        height: 75px;
        background-image: linear-gradient(rgb(244, 244, 244),rgb(79, 206, 238));
    }
    .aiyin-logo{
        display: flex;
        align-items: center;
        width:20%;
        justify-content: space-between;
        h1{
            font-weight: 500;
            font-size: 25px;
            // color:rgb(32, 92, 221);
        }
        cursor: pointer;
    }

    .slogan {
        // color:rgb(32, 76, 221);
        h5 { 
            font-weight: 500;
        }
    }

</style>