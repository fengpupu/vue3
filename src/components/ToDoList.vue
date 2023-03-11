<template>
    <div>
        <div>
            <input v-model="templateItem" @keydown.enter="add" />
            <button v-if="all - active > 0" @click="clearDone">清楚</button>
        </div>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <input type="checkbox" v-model="item.checked">
                {{ item.label }}
            </li>
        </ul>
        <div>{{ active }}/{{ all }}</div>
        <div @click="allDone">全选</div>
    </div>
</template>

<script setup>
import { ref, computed, watchEffect, watch ,reactive} from "vue"
let list = reactive(JSON.parse(localStorage.getItem('todos')) || [])
let templateItem = ref('')
let template = null
let active = computed(() => {
    return list.filter((item) => {
        return !item.checked
    }).length
})
let all = computed(() => {
    return list.length
})
watchEffect(()=>{
    // console.log('change',list.length)
    // localStorage.setItem('todos',JSON.stringify(list))
    template = list
    console.log('template',template)
})
// watch(list, () => {
//     console.log('change', list)
// })
function add() {
    list.push({ label: templateItem.value, checked: false })
    templateItem.value = ''
}
function allDone() {
    let flag = true
    list.forEach(item => {
        flag = flag && item.checked
    })
    flag = !flag
    list.forEach(item => {
        item.checked = flag
    })
}
function clearDone() {
    list = list.filter(item => !item.checked)
}
</script>

<style>
h1 {
    color: red;
}
</style>