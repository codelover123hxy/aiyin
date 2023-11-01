<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="nav">
        <router-link to="/home">
            <h4>首页</h4>
            <h6>Review of work contents</h6>
        </router-link>
        <router-link to="/intro/club">
            <h4>社团介绍</h4>
            <h6>Introduction of aiyin club</h6>
        </router-link>
        <router-link to="/feature/latest">
            <h4>活动新闻</h4>
            <h6>News of aiyin club events</h6>
        </router-link>
        <router-link to="/achievement">
            <h4>社团成果</h4>
            <h6>Achievements of aiyin club</h6>
        </router-link>
        <router-link to="/join/advertise">
            <h4>加入我们</h4>
            <h6>Join us aiyin club</h6>
        </router-link>
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
    .nav {
        text-align: center;
        margin: 0 auto;
        padding: 0;
    }

    .nav .router-link-active {
        height:100px;
        border-bottom: 4px solid rgb(91, 25, 213);
    }

    .nav a {
        h4{
            line-height: 75px;
            font-weight: 400;
        }
        h6 {
            margin-top:-45px;
            position: absolute;
            width:max-content;
            left:50%;
            transform: translate(-50%);
            font-size: xx-small;
            color:rgb(25, 108, 114);
            font-weight: normal;
        }
        display: inline-block;
        position: relative;
        width: 150px;
        text-decoration: none;
        font-size:20px;
        color:rgb(0, 0, 0);
    }

</style>