<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="circle">
        <h4>{{ chineseText }}</h4>
        <h6>{{ englishText }}</h6>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        props:{
            radius:String,
            color:String,
            chineseText:String,
            englishText:String
        },
        methods:{
            
        }
    }
</script>

<style scoped lang="less">
    .circle{
        position: relative;
        display: flex;
        width: v-bind("(radius) + 'px'");
        height: v-bind("(radius) + 'px'");
        line-height:v-bind("(radius) + 'px'");
        background-image: linear-gradient(rgb(255,255,255),rgb(67,128,168));
        border-radius: 50%;
        padding: 1px;
        box-sizing: border-box;
        h6{
            position: absolute;
         
            top:v-bind("(radius*0.3 - 25) + 'px'");
            font-size:9px;            
            word-wrap: break-word;
            flex-wrap: wrap;
            font-weight: normal;
            left:50%;
            line-height:1em;
            word-wrap: break-word;
            transform: translate(-50%);
        }
        h4{
            position:absolute;
            top:0;
            // top:v-bind("(radius*0.3 - 25) + 'px'");
            width:max-content;
            left:50%;
            transform: translate(-50%);
            z-index:2;
        }
    }
</style>