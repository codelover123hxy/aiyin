<template>
  <div :class="pageType" class="base">
    <img :class="[pageType]" alt="aiyin" class="logo" src="../assets/aiyin-logo.png" @click="goHome()"/>
    <div v-if="pageType==='normal'">
      <h1>爱 因 社</h1>
    </div>
    <div v-if="pageType==='normal'">
      <div>
        <h5>
          爱因挠头方知果
        </h5>
        <h5 style="margin-top:-10px">
          思坦论之果成因
        </h5>
      </div>
    </div>
    <div v-for="(l, index) in links" v-show="pageType === 'normal'" :class="index === pageNow ? 'select' : 'notSelect'"
         class="link">
      <div style="width: 100%;">
        <router-link :to="l.link" style="display: block">{{ l.name + "\n" }}</router-link>
        <router-link :to="l.link">{{ l.details }}</router-link>
      </div>
    </div>
    <div v-show="pageType === 'mini' || pageType === 'middle'" :class="btnOn ? 'btnOn' : 'btnOff'"
         class="listButton" @click="listBtnClicked"></div>
  </div>
  <div v-show="listShow" :class="pageType" class="list">
    <div v-for="(l, index) in links" :class="index === pageNow ? 'select' : 'notSelect'" class="listItem"
         @click="listBtnClicked">
      <router-link :to="l.link">
        <div style="width: 100%;">
          {{ l.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// import Button from '@/components/Button.vue'
import store from "@/store"
import {computed, onMounted, ref} from "vue"
import router from "@/router"

const links = [
	{name: "首页", details: "Review of work contents", link: "/home"},
	{name: "社团介绍", details: "Introduction of aiyin club", link: "/intro/club"},
	{name: "活动新闻", details: "News of aiyin club events", link: "/feature/latest"},
	{name: "社团成果", details: "Achievements of aiyin club", link: "/achievement"},
	{name: "加入我们", details: "Join us aiyin club", link: "/join/advertise"},
]
const pageType = computed(() => store.state.page.pageType)
const pageNow = computed(() => store.getters.getNowPage)
const btnOn = ref(true)
const listShow = ref(false)

function goHome() {
	router.push({
		path: "/home"
	})
}

async function handleResize() {
	let width = document.documentElement.clientWidth
	if (width >= 1024) {
		await store.commit("setPageType", "normal")
		document.querySelector("body")?.setAttribute("style", "min-width: 1440px")
	} else if (width >= 768) {
		store.commit("setPageType", "middle")
		document.querySelector("body")?.setAttribute("style", "min-width: 420px")
	} else {
		store.commit("setPageType", "mini")
		document.querySelector("body")?.setAttribute("style", "min-width: 320px")
	}
}

function listBtnClicked() {
	btnOn.value = !btnOn.value
	listShow.value = !listShow.value
	console.log("当前页面" + pageNow.value)
}

onMounted(async () => {
	await handleResize()
	window.addEventListener("resize", handleResize)
	console.log(store.getters.getPageType)
})

</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
  font-size: large;
}

.base {
  z-index: 10;
  display: grid;
  width: 100%;
  background-image: linear-gradient(rgb(244, 244, 244), rgb(79, 206, 238));
  position: relative;
  align-items: center;
}

.base.normal {
  height: 90px;
  grid-template-columns: 15% repeat(8, 1fr);
}

.base.middle {
  height: 90px;
  grid-template-columns: 1fr 60px;
}

.base.mini {
  height: 80px;
  grid-template-columns: 1fr 60px;
}

.logo.normal {
  position: relative;
  left: 50px;
  width: 90px;
}

.logo.middle {
  width: 90px;
  position: relative;
  left: 30px;
}

.logo.mini {
  width: 80px;
  position: relative;
  left: 30px;
}

.link.select {
  background-color: white;
  border-radius: 20px;
  padding: 5px;
  transition: background-color 0.5s;
}

.link.select a {
  color: rgb(79, 206, 238);
}

.link.select::after {
  display: block;
  content: "";
  width: 100%;
  position: relative;
  top: 20px;
  border-bottom: 3px solid white;
}

.link.notSelect a {
  color: black;
}

.listButton {
  width: 40px;

  height: 40px;
}

.listButton.btnOn {
  background-image: url("../assets/list.svg");
  width: 80px;
  background-repeat: no-repeat;
  background-position: center;
}

.listButton.btnOff {
  background-image: url("../assets/close.svg");
  width: 80px;
  background-repeat: no-repeat;
  background-position: center;
}

.list {
  width: 100%;
  height: 100vh;
  z-index: 5;
  position: absolute;
  top: 90px;

  background-color: white;
  align-items: center;
  justify-items: center;
  animation: showList 0.1s ease;
}

.list.middle {
  top: 90px;
}

.list .listItem {
  width: 40%;
  margin: 20px auto auto;
  padding: 5px;
  border-radius: 15px;
  border: 2px solid rgb(79, 206, 238);;
}

.list .listItem.select {
  background-color: rgb(79, 206, 238);
  color: white;
}

.list .listItem.notSelect {
  background-color: white;
}

.list .listItem.notSelect a {
  color: rgb(79, 206, 238);
}
</style>