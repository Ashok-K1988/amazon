import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:"Login",
    component:() => import ('../views/LoginPage.vue')
  },
  {
    path:'/dashboard',
    name: "Dashboard",
    component: () => import ('../views/Dashboard.vue'),
    children:[
      {
        path:"",
        name:"home",
        component: () => import('../component/ImageMove.vue'),
        children:[
          {
            path:'',
            name: 'home',
            component :() => import('../component/Card.vue'),
            children:[
              {
                path:'',
                name:"home",
                component :() => import('../component/FullCard.vue'),
                children:[
                  {
                    path: "",
                    component: () => import ('../component/Footer.vue')
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
