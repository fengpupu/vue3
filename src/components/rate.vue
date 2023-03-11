
import Rate from '../../../geektime-vue-course/00-001大圣原有完整项目vue3-intro/src/components/Rate.vue';

<template>
    <div>
        {{ rate }}
    </div>
</template>
<script setup>
import {ref,computed} from 'vue'
let props  = defineProps({
    value:Number,

})
let rate = computed(()=>'★★★★★☆☆☆☆☆'.slice(5-props.value,10-props.value))
</script>
<style>
</style>