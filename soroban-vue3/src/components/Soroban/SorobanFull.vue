<template>
  <div class="flex">
    <BeadColumn
      v-for="(digit, i) in store.getSorobanNumberList"
      :digit="digit"
      :key="i"
    />
  </div>
</template>

<script setup>
import { useSorobanStore } from "@/stores/soroban";
import BeadColumn from "./BeadColumn.vue";

const store = useSorobanStore();
</script>

<style></style>
