import {createRouter, createWebhistory} from 'vue-router'

const routes =[
    {
        path:'/',
        name:'home',
        component: Home
    }
]

const router = createRouter({
    history: createWebhistory(),
    routes
})

export default router;