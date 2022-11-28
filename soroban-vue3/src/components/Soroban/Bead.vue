<template>
  <div :class="wrapperStyle">
    <div class="bead" :class="{ on: on, five: five }"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  on: {
    type: Boolean,
    default: false,
  },
  five: {
    type: Boolean,
    default: false,
  },
});

const wrapperStyle = props.five ? "border-b-4 pb-5 p-1" : "px-1 py-[0.5px]";
</script>

<style></style>
