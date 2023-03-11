<template>
  <div class="trans-container">
    <trans-1></trans-1>
    <trans-2></trans-2>
  </div>
</template>
<script setup>
import trans1 from "./part/trans1.vue";
import trans2 from "./part/trans2.vue";
</script>
<style scoped>
.trans-container {
    padding: 60px;
    display: flex;
    flex-direction: column;
}
</style>