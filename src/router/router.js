import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home"
import Favorites from "@/views/Favorites"
import Watch from "@/views/Watch"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [ 
        { path: "/", component: Home },
        { path: "/favorites", component: Favorites },
        { path: "/watch", component: Watch }
    ]
})

export default router