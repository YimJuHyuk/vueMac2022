import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
// import router from "@/router/index"; // 중괄호 없이 호출시 에러
import { router } from "@/router/index"; // 라우터 추가

import './assets/css/main.css';

import VueParticles from 'vue-particles'
// import Particles from "vue3-particles";

// 이렇게도 설정가능 시작
// const app = createApp(App);

// app.use(store);
// app.use(router); // 사용 설정 하기

// app.mount('#app');
// 이렇게도 설정가능 끝

createApp(App)
.use(router)
.use(VueParticles)
// .use(Particles)
.mount('#app')