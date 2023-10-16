<template>
    <div class="container">
        <div style="margin-top: 20px;font-size: 20px;">欢迎报名爱因社干事</div>
        <form action="#">
            <div style="margin-top: 20px;text-align: left;">
                1.请选择你的感兴趣的组别
                <select name="group" id="" class="groups">
                    <option value="math">数学组</option>
                    <option value="tech">技术组</option>
                    <option value="advertise">宣传组</option>
                    <option value="english">英语组</option>
                </select>
            </div>
            <div class="do">
                2.想为爱因社做些什么
                <textarea name="" id="" cols="30" rows="10"
                    
                ></textarea>
            </div>
            <div style="margin-top: 20px;text-align: left;">
                3.你期待的活动
                <input type="checkbox" name="activity" :value="1" v-model="checkedItems">别开生面的讲座
                <input type="checkbox" name="activity" :value="2" v-model="checkedItems">学术沙龙
                <input type="checkbox" name="activity" :value="3" v-model="checkedItems">知识竞赛
                <input type="checkbox" name="activity" :value="4" v-model="checkedItems" >其他
                <input v-if="isShowOthers" type="text" style="display:inline-flex" class="others">
                
            </div>
            
            <Button :name="'提交'" :background-color="'rgb(23,145,255)'" :color="'white'"
            style="margin-top: 30px;" @click="submit"
            ></Button>
        </form>
        
        
    </div>
</template>

<script>
    import Button from '@/components/Button.vue'
    export default{
        name:'applicationIndex',
        data(){
            return{
                isShowOthers:false,
                checkedItems:[],
               
            }
        },
        components:{
            Button
        },
        methods:{
            submit(){
                // console.log(formData)
            }
        },
        watch:{
            checkedItems(newValue,){
                console.log(newValue)
                if (newValue.includes(4)){
                    // console.log(true)
                    this.isShowOthers = true
                }
                else{
                    this.isShowOthers = false
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .container{ 
        display: block;
        width:50%;
        padding: 10px;
    }

    .groups:focus{
        outline: none;
    }
    .do{
        align-items: center;
        display: flex;
        margin-top: 20px;
        textarea{
            border: 1rpx solid black;
            margin-left: 30px;
            border-radius: 10px;
            height: 100px;
            resize: none;
        }
        textarea:focus{
            outline: none;
        }
    }

    
    .others{
        width:100px;
    }
    .others:focus{
            outline: none;
        }

    
</style>
