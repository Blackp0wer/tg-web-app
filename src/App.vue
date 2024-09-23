<script setup lang="ts">
// import { Alert } from 'vue-tg';
// import { ref } from "vue";
import Navbar from "./components/layout/Navbar.vue";
import Stats from "./components/Stats.vue";
import Character from "./components/Character.vue";
import { useWebApp } from "vue-tg";

const tg = useWebApp();

console.log(tg.initDataUnsafe) 
</script>

<template>
  <div  class="app">
    <div class="wrapper">
      <Character />
      <Stats />
    </div>
    <router-view></router-view>
    <footer>
      <Navbar />
    </footer>
  </div>
</template>

<style scoped>

footer{
  position: fixed;
  bottom: 0;
  width: 100%;
}

.app{
  height: 100svh;
}

.wrapper{
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

</style>
