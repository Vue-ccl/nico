import VueRouter from 'vue-router'

const router =   new VueRouter({
    mode:'history',
    routes: [
        {
            name: 'Nico',
            path: '/nico',
            component: () => import('../pages/Nico.vue')
        },
        {
            name: 'Recommend',
            path: '/recommend',
            component: () => import('../pages/Recommend.vue')
        },
        {
            name: 'Transport',
            path: '/transport',
            component: () => import('../pages/Transport.vue')
        },
        {
            name: 'About',
            path: '/about',
            component: () => import('../pages/About.vue')
        },
        //重定向 当我访问/ 的时候，就跳转到Home页面
        {
            path: '/',
            redirect: {
                name: 'Nico'
            },
            component: () => import('../pages/Nico.vue')
        },      
    ],
    scrollBehavior (to, from, savedPosition) {
        console.log(to,from,savedPosition)
        return { x: 0, y: 0 }
      }
   
})

export default router