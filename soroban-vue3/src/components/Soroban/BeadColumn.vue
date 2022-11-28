<template>
  <div>
    <div class="flex flex-col border border-red-100 p-1">
      <BeadFive />
      <Bead />
      <Bead />
      <Bead />
      <Bead />
    </div>
    <div class="text-center">{{ digit }}</div>
  </div>
</template>

<script setup>
import Bead from "./Bead.vue";
import BeadFive from "./BeadFive.vue";

const props = defineProps({
  digit: {
    type: Number,
    default: 0,
  },
});
</script>

<style></style>
