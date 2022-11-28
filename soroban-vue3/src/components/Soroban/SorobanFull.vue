<template>
  <!-- row reverse, because digits are reversed!!!! -->
  <div class="flex flex-row-reverse">
    <BeadColumn
      v-for="(digit, i) in reverseList"
      :digit="digit"
      :key="i"
      :position="i"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSorobanStore } from "@/stores/soroban";
import BeadColumn from "./BeadColumn.vue";

const store = useSorobanStore();

const reverseList = computed(() => {
  //to get position easily (length of list may change)
  return [...store.getSorobanNumberList].reverse();
});
</script>

<style></style>
