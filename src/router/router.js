import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home"
import Favorites from "@/views/Favorites"
import Watch from "@/views/Watch"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [ 
        { path: "/", component: Home, meta: { title: "Home" } },
        { path: "/favorites/:userid", component: Favorites, meta: { title: "Favorites" } },
        { path: "/watch/:watchid", component: Watch, meta: { title: "Watch" } }
    ]
})

export default router