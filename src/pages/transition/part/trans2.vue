<template>
  <div>
    <transition v-for="(n, i) in numberArr" :key="i" name="slide" mode="out-in">
      <span v-if="n == 0">0</span>
      <span v-else-if="n == 1">1</span>
      <span v-else-if="n == 2">2</span>
      <span v-else-if="n == 3">3</span>
      <span v-else-if="n == 4">4</span>
      <span v-else-if="n == 5">5</span>
      <span v-else-if="n == 6">6</span>
      <span v-else-if="n == 7">7</span>
      <span v-else-if="n == 8">8</span>
      <span v-else-if="n == 9">9</span>
      <span v-else-if="n == '.'">.</span>
    </transition>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
let numberArr = reactive([]);
let time = null;
let props = defineProps({
  numberInit: {
    default: 390.23,
  },
});
onMounted(() => {
  init();
  // time = setInterval(()=>{
  //     number.value ++
  //     if(number.value >= props.numberInit){
  //         clearInterval(time)
  //         number.value = props.numberInit
  //     }
  // },5)
});
function init() {
  let initArr = props.numberInit.toString().split(".");
  for (let n of initArr) {
    for (let i of n) {
      numberArr.push(i > 5 ? 0 : 9);
      let index = numberArr.length - 1;
      let step = i > 5 ? 1 : -1;
      let time = setInterval(() => {
        console.log("numberArr[index]", numberArr[index], i);
        if (numberArr[index] == i) {
          clearInterval(time);
          return;
        }
        numberArr[index] += step;
        console.log(index, numberArr[index], i);
      }, 100);
    }
    numberArr.push(".");
  }
  numberArr.pop();
}
</script>
<style scoped>
span {
  display: inline-block;
  padding: 90px 0;
}
.slide-enter-from {
  transform: translateY(4px);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s;
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>