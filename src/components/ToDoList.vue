<template>
    <div>
        <div>
            <input v-model="templateItem" @keydown.enter="add"/>
            <button v-if="all-active>0" @click="clearDone">清楚</button>
        </div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <input type="checkbox" v-model="item.checked">
                {{ item.label }}
            </li>
        </ul>
        <div>{{ active }}/{{ all }}</div>
        <div @click="allDone">全选</div>
    </div>
</template>

<script setup>
import {ref,computed} from "vue"
let list = ref([])
let templateItem = ref('')
let active = computed(()=>{
    console.log('change active')
    return list.value.filter((item)=>{
       return !item.checked
    }).length
})
let all = computed(()=>{
    return list.value.length
})
function add(){
    list.value.push({label:templateItem.value,checked:false})
    templateItem.value = ''
}
function allDone(){
    let flag = true
    list.value.forEach(item=>{
        flag = flag&&item.checked
    })
    flag = !flag
    list.value.forEach(item=>{
        item.checked = flag
    })
}
function clearDone(){
    list.value =  list.value.filter(item=>!item.checked)
}
</script>

<style>
h1 {
    color: red;
}
</style>