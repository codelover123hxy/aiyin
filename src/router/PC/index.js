import store from "@/store"

const routesPC = [

	{path:"/",redirect:"/Home"},
	{
		path:"/Home",
		component:() => import("@/views/Home.vue"),
		beforeEnter:() => {
			store.commit("setNowPage",0)
		}},
	{
		path:"/intro",
		component:() => import("@/views/Intro.vue"),
		children:[
			{
				path:"club",
				name:"club",
				component:() => import("@/views/ClubIntro.vue")
			},
			{
				path:"leaders",
				name:"leaders",
				component:() => import("@/views/LeadersIntro.vue")
			}
		],
		beforeEnter:() => {
			store.commit("setNowPage",1)
		}
	},
	{
		path:"/join",
		component:() => import("@/views/JoinUs.vue"),
		children:[
			{
				path:"advertise",
				name:"advertise",
				component:() => import("@/views/Advertise.vue")
			},
			{
				path:"apply",
				name:"apply",
				component:() => import("@/views/Application.vue")
			}
		],
		beforeEnter:() => {
			store.commit("setNowPage",4)
		}
	},
	{
		path:"/achievement",
		component:() => import("@/views/Achievement.vue"),
		beforeEnter:() => {
			store.commit("setNowPage",3)
		}
	},
	{
		path:"/feature",
		component:() => import("@/views/Feature.vue"),
		children:[
			{
				path:"latest",
				name:"latest",
				component:() => import("@/views/LatestActivity.vue")
			},
			{
				path:"previous",
				name:"previous",
				component:() => import("@/views/PreviousActivity.vue")
			},
			{
				path:"push",
				name:"push",
				component:() => import("@/views/Push.vue")
			},
			{
				path:"article",
				name:"article",
				component:() => import("@/views/Article.vue")
			}
		],
		beforeEnter:() => {
			store.commit("setNowPage",2)
		}
	}
]
export default routesPC