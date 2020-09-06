import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  const routes = [
  {
    path: "/",
    component: () => import('@/components'),
    children: [
        {
            path: '/',
            name: "Halaman-Utama",
            meta : "front-end",
            component: () => import('@/views/blog/index'),
        },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
