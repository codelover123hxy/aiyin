<template>
    <div style="position: relative" class="content">
        <div class="circle"
        :style="{'backgroundImage':icon}">
            <div class="words">{{ num }}<span class="item">项</span></div>
        </div>
        <div class="prize-name">{{ name }}</div>





    </div>
</template>

<script>
export default{
	name:"prizeIndex",
	props:{
		num:Number,
		icon:String,
		color:String,
		name:String
	},
	data(){
		return{

		}
	},

	methods:{

	}
}
</script>

<style scoped lang="less">
    .content{
        width:0px;
    }


    .words{
        position: absolute;
        left:70px;
        bottom:0;
        z-index:1;
        font-size: 80px;
        color:white;
            /*形成空心部分⬇*/
        -webkit-text-stroke: 0.5px black;
        width:max-content;
        .item{
            font-size:20px;
        }
    }
    .circle{
        position:relative;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border:10px solid v-bind(color);
        background-size:60%;
        background-position: center;
        background-repeat: no-repeat;
    }
    .circle:after{
        display: block;
        position:absolute;
        content:"";
        width:70px;
        height:50px;
        top:10px;
        left:70px;
        background-color:v-bind(color);
    }
    .circle:before{
        position:absolute;
        content:"";
        border-left: 50px solid v-bind(color);
        border-top: 50px solid transparent;
        border-bottom: 50px solid transparent;
        bottom:-15px;
        left:140px;
        display: block;
    }
    .prize-name{
        width:max-content;
        color:v-bind(color)
    }
</style>
