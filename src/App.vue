<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Particles id="tsparticles" />

  <!-- <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="{
      background: {
        color: {
          value: '#0d47a1'
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 6,
          straight: false
        },
        number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          random: true,
          value: 5
        }
      },
      detectRetina: true
    }"
  /> -->

  <h2>
    <!-- <a target="_blank" href="https://www.npmjs.com/package/vue-pagination-2">Vue Pagination 2</a> -->
    <!-- <router-link class="atg" target="_blank" to="/"> -->
      <a href="#" class="atg" target="_blank" @click="refresh()">
        무한삽질 개발자의 개인 페이지 <br/>HI JENKINS CI/CD 333
      </a>
    <!-- </router-link> -->
  </h2>

  <div v-if="typeof this.userId === 'undefined' || this.userId == null || this.userId === ''" >
    <label for="">아이디 : </label> <input v-model="tempUserId" type="text"> <button @click="login();">로그인</button>
  </div>
  <div v-else>
    <button @click="logout();">로그아웃</button>
  </div>

  <router-link to="/home">
    Home
  </router-link>
  |
  <router-link 
    v-if="typeof this.userId === 'undefined' || this.userId == null || this.userId === ''" 
    to="/comm">
    게시판
  </router-link>

  <router-link v-else :to="{ path: '/comm/'+this.userId}">
    게시판
  </router-link>

  <div v-if="typeof this.userId != 'undefined' && this.userId != null && this.userId != ''" >
    <p class="login">{{this.userId}}님 오늘도 방문해주셔서 감사합니다.</p>
  </div>
  <!-- <p>Selected page: {{page}}</p> -->
  <router-view />
  <!-- <div class="pagination">
    <pagenation 
      :records="10000" 
      v-model="page" 
      :per-page="100" 
      @paginate="callback">
    </pagenation>   -->
  <!-- </div> -->
  
</template>



<script>
// import HelloWorld from './components/HelloWorld.vue'
import Particles from './components/particles/Particles.vue'

// import Pagenation from 'vue-pagination-2';

// import { loadFull } from "tsparticles";


export default {
  name: 'App',
  props: {
  },
  components: {
    // HelloWorld,
    // Pagenation
    Particles
  },
  data() {
    return {
      page: 1,
      userId: '' // 로그인 아이디
    }
  },
  mounted() {
  },
  methods: {
    // callback: function(page) {
    //   console.log(`Page ${page} was selected. Do something about it`);
    //   return page
    // }
    login(){
      this.userId = this.tempUserId;
    },
    logout(){
      this.userId = '';
    },
    refresh(){
      this.$router.push('/');
    }

  }
}
</script>

<style scoped>
  #tsparticles {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    /* background-image: url(""); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: -1;
  }
  </style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
