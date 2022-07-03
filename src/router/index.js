
// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from 'vue-router';
import Home from "@/views/home/Home.vue"

const routes = [
    {
        path: "/",
        name: "App",
        // redirect: "/",
    },
    {
        path: "/home",
        name: "Home",
        component: Home // 위에서 컴포넌트 임포트 후 선언 하는 방식
    },
    {
        path: "/comm",
        name: "Communication",
        component: () => import('@/views/comm/Communication.vue') // 현재 라인에서 임포트 하자마자 컴포넌트에 주입하는 방식
    },
    {
        path: "/comm/:id",
        name: "Parameter",
        component: () => import('@/views/test/Parameter.vue') // 현재 라인에서 임포트 하자마자 컴포넌트에 주입하는 방식
    },
];

// 이렇게 해도 된다.
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
// export default router;

export const router = createRouter({
  history: createWebHistory(),
  routes,
});