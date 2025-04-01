import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter , createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Dashboard', component: () => import('./views/AppDashboard.vue') },
        { path: '/watchparty' , name: 'WatchParty', component: () => import('./views/WatchParty.vue') },
        //{ path:'movies/:id',name:'MovieDetails',component: () => import('./views/MovieDetail.vue') },
    ],
})

createApp(App)
  .use(router)
  .mount('#app')
