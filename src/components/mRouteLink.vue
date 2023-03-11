<template>
    <a :href="'#'+props.to">
        <slot></slot>
    </a>
</template>
<script setup>
import {} from 'vue'
let props  = defineProps({
    to:{
        default:""
    }
})
</script>