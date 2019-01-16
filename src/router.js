import Vue from "vue";
import VueRouter from "vue-router";
// 引入组件
import home from "./components/Home.vue";
import about from "./components/About.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        component: home
    },
    {
        path: "/about",
        component: about
    }
]

var router =  new VueRouter({
    routes
})
export default router;