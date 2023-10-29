<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <button class="btn" :style="{color,backgroundColor}">{{ name }}</button>
    </div>
</template>

<script>
export default{
	props:{
		name:String,
		color:String,
		backgroundColor:String
	},
	data(){
		return{

		}
	},
	methods:{

	}
}
</script>

<style scoped>
    .btn{
        width:80px;
        height:40px;
        border-radius: 10px;
        box-shadow: inset;
        border:none;
    }

</style>