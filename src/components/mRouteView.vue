<template>
    <component :is="comp"></component>
</template>
<script setup>
import { computed } from 'vue';
import {useRouter} from '../router/mrouter.js'
let router = useRouter()
let comp = computed(()=>{
    let currentRoute = router.routes.find(route=>{
        return (route.path === router.current.value)
    })
    console.log(currentRoute,router.current.value)
    return currentRoute?currentRoute.component:null
})
</script>