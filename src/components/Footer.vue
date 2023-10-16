<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="footer">
            <span>友情链接</span>
            <a href="http://www.lxy.zjut.edu.cn/" target="_blank">浙工大理学院官网</a>
            <a href="http://www.zjut.edu.cn/" target="_blank">浙江工业大学官网</a>
        </div>
        <div class="copy-right">
            CopyRight © 2023 浙江工业大学爱因社
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped lang="less">
    .container{
        padding: 30px;
        margin:0;
        background-color:rgb(244, 244, 244);
    }
    .footer{        
        span{
            font-weight: 700;
            display:block;
        }
        a{
            display:block;
            text-decoration: none;
            color:black;
            line-height: 40px;
            height:30px;
        }
        a:hover{
            color:rgb(0, 98, 185);
        }
    }

    .copy-right{
        margin-top:30px;
    }
</style>