<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <h2>
    <!-- <a target="_blank" href="https://www.npmjs.com/package/vue-pagination-2">Vue Pagination 2</a> -->
    <!-- <router-link class="atg" target="_blank" to="/"> -->
      <a href="#" class="atg" target="_blank" @click="refresh()">
        무한삽질 개발자의 개인 페이지 <br/>HI JENKINS CI/CD
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

// import Pagenation from 'vue-pagination-2';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Pagenation
  },
  data() {
    return {
      page: 1,
      userId: '' // 로그인 아이디
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
