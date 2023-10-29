<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
	name: "App",
	components: {
		// NavBar,
		Header,
		Footer
	},
	// methods: {
	// 	handleResize() {
	// 		let width = document.documentElement.clientWidth
	// 		if (width >= 1024) {
	// 			store.commit("setPageType", "normal")
	// 			document.querySelector("body")?.setAttribute("style", "min-width: 1440px")
	// 		} else if (width >= 768) {
	// 			store.commit("setPageType", "middle")
	// 			document.querySelector("body")?.setAttribute("style", "min-width: 420px")
	// 		} else {
	// 			store.commit("setPageType", "mini")
	// 			document.querySelector("body")?.setAttribute("style", "min-width: 320px")
	// 		}
	// 	}
	// },
	// mounted() {
	// 	this.handleResize()
	// 	window.addEventListener("resize", this.handleResize)
	// }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

</style>
