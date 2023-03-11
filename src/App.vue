

<template>
  <header>
    <!-- <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    /> -->

    <div class="wrapper" ref="wrapper">
      <router-link to="/">列表</router-link>
      <router-link to="/about">打分</router-link>
      <router-link to="/count">积分</router-link>

    </div>
    <div>
      <heading :level="1">标题1</heading>
      <heading :level="2">标题2</heading>
      <heading :level="3">标题3</heading>
      <todolist title="jajajja"></todolist>


      <router-view></router-view>
    </div>

  </header>

</template>

<script setup>

import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import mRouterLink from "./components/mRouteLink.vue";
import mRouterView from "./components/mRouteView.vue";
import heading from "./components/heading.jsx";
import todolist from "./components/ToDO.jsx"

import { ref, onMounted } from "vue";
let wrapper = ref(null)
let typeNum = ref('repeat(1,1fr)')
onMounted(() => {
  console.log(wrapper.value.children.length)
  typeNum.value = `repeat(${wrapper.value.children.length},1fr)`
})

</script>

<style scoped >
header {
  line-height: 1.5;
  padding: 40px;
}

.wrapper {
  margin-bottom: 30px;
  display: flex;
}
.wrapper a {
    margin-right: 20px;
    color: white;
  }
</style>
