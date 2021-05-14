import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/index',
    },

    {
        path: "/index",
        name: "Home",
        meta: {
            title: "首页",
            keepAlive: true
        },
        component: () => import("../view/index.vue"),
    },
    // {
    //     path: "/login",
    //     name: "Login",
    //     meta: {
    //         title: "登录",
    //         keepAlive: true
    //     },
    //     component: () => import("../views/Login/index.vue"),
    // },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;