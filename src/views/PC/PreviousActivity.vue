<template>
    <div class="container">
        <div>2022-2023</div>
        <div class="lecture">精彩讲座</div>
        <img src="@/assets/calendar.png" alt="" width="500">
        <div class="moment">美妙瞬间</div> 
        <div style="display: flex;justify-content: space-evenly;">
          <img src="@/assets/moment1.png" alt="" height="400">
          <img src="@/assets/moment2.png" alt="" height="400">
        </div>
    </div>
</template>

<script>
    export default{
        name:'previousActivity',
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
        display: block;
        width:50%;
        padding: 20px;
    }
    .lecture, .moment{
        margin:20px 0;
    }

</style>