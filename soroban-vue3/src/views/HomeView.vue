<template>
  <main>
    <h1 class="text-slate-500 underline font-bold">Hello</h1>
    <div class="flex justify-center mt-5">
      <SorobanFull></SorobanFull>
    </div>
    <div class="text-center mt-10">
      <button class="border px-2 py-1" @click="addOne">
        Add one to soroban
      </button>
      <button class="border px-2 py-1 border-red-100 ml-3" @click="reset">
        Reset soroban
      </button>
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

const reset = () => {
  store.setSorobanNumber(0);
};
</script>
