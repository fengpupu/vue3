<template>
    <div>
        <h1 class="my-color">这是关于页面</h1>
        <rate :value="4"></rate>
        <Rate2 v-model:value="rateValue"></Rate2>
    </div>


</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useMouse } from '../ utils/useMouse';
import rate from '../components/rate.vue';
import Rate2 from '../components/Rate2.vue';
let color = ref('red')
let rateValue = ref(2.5)
// useMouse()
onMounted(() => {
    console.log(rate)
    // setInterval(() => {
    //     color.value = color.value == 'blue' ? 'red' : 'blue'
    // }, 1000)
})
</script>
<style scoped>
.my-color {
    color: v-bind(color)
}
</style>