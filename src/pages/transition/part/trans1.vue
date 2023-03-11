<template>
    <button @click="showFn">show</button>
    <transition name="fade">
        <h1 v-if="show">你好</h1>
    </transition>
</template>
<script setup>
import { ref } from 'vue'
let show = ref(false)
function showFn(){
    show.value = !show.value
}
</script>
<style scoped>
.fade-enter-active,.fade-leave-active{
    transition: opacity 0.5s linear;
}
.fade-enter-from,.fade-leave-to {
    opacity: 0;
}
</style>