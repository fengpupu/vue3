<template>
    <div style="position:relative">
        <div>
            <span v-for="num in 5" @mouseover="mouseover(num)">☆</span>
        </div>
        <div class="full-starts" :style="valueWidthStyle">
            <span v-for="num in 5"  @mouseover="mouseover(num)">★</span>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue'
let props = defineProps({
    value: {
        default: 4
    }
})
let valueWidthStyle = computed(() => ({ width: props.value + 'em' }))
let emits = defineEmits(['update:value'])
function mouseover(num) {
    emits('update:value', num)
}
</script>
<style scoped>
.full-starts {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
}
</style>