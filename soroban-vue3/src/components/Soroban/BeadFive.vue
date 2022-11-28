<template>
  <div class="border-b-4 pb-5 p-1">
    <div class="bead five" :class="{ on: on }"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  on: {
    type: Boolean,
    default: false,
  },
});
</script>

<style></style>
