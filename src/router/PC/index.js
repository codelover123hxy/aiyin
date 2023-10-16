const routesPC = [
    
    {path:'/',redirect:'/Home'},
    {path:'/Home',component:() => import('@/views/PC/Home.vue')},
    {
        path:'/intro',
        component:() => import('@/views/PC/Intro.vue'),
        children:[
            {
                path:'club',
                name:'club',
                component:() => import('@/views/PC/ClubIntro.vue')
            },
            {
                path:'leaders',
                name:'leaders',
                component:() => import('@/views/PC/LeadersIntro.vue')
            }
        ]
    },
    {
        path:'/join',
        component:() => import('@/views/PC/JoinUs.vue'),
        children:[
            {
                path:'advertise',
                name:'advertise',
                component:() => import('@/views/PC/Advertise.vue')
            },
            {
                path:'apply',
                name:'apply',
                component:() => import('@/views/PC/Application.vue')
            }
        ]
    },
    {
        path:'/achievement',
        component:() => import('@/views/PC/Achievement.vue')
    },
    {
        path:'/feature',
        component:() => import('@/views/PC/Feature.vue'),
        children:[
            {
                path:'latest',
                name:'latest',
                component:() => import('@/views/PC/LatestActivity.vue')
            },
            {
                path:'previous',
                name:'previous',
                component:() => import('@/views/PC/PreviousActivity.vue')
            },
            {
                path:'push',
                name:'push',
                component:() => import('@/views/PC/Push.vue')
            },
            {
                path:'article',
                name:'article',
                component:() => import('@/views/PC/Article.vue')
            }
        ]
    }
]
export default routesPC