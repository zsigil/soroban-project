<template>
  <main>
    <h1 class="text-slate-500 underline font-bold">Hello</h1>
    <div class="flex justify-center mt-5">
      <SorobanFull></SorobanFull>
    </div>
    <div class="text-center mt-10">
      <button @click="addOne">Add one to soroban</button>
    </div>
  </main>
</template>

<script setup>
import SorobanFull from "../components/Soroban/SorobanFull.vue";
import { useSorobanStore } from "@/stores/soroban";

const store = useSorobanStore();

const addOne = () => {
  store.setSorobanNumber(store.sorobanNumber + 1);
};
</script>
