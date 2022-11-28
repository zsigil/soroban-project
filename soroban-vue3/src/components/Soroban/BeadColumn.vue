<template>
  <div>
    <div class="flex flex-col border border-red-100">
      <Bead :five="true" :on="fiveOn" :position="position" />
      <div class="mt-5">
        <Bead
          v-for="(beadOn, i) in smallBeads"
          :key="i"
          :on="beadOn"
          :position="position"
        />
      </div>
    </div>
    <div class="text-center">{{ digit }}</div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useSorobanStore } from "@/stores/soroban";
import Bead from "./Bead.vue";

const store = useSorobanStore();

const props = defineProps({
  digit: {
    type: Number,
    default: 0,
  },
  position: {
    type: Number,
    default: 0,
  },
});

let fiveOn = ref(false);
let smallBeads = ref([false, false, false, false]);

function translateDigit() {
  if (props.digit >= 5) {
    fiveOn.value = true;
  } else {
    fiveOn.value = false;
  }
  switch (props.digit) {
    case 1:
      return [true, false, false, false];
    case 2:
      return [true, true, false, false];
    case 3:
      return [true, true, true, false];
    case 4:
      return [true, true, true, true];
    case 5:
      return [false, false, false, false];
    case 6:
      return [true, false, false, false];
    case 7:
      return [true, true, false, false];
    case 8:
      return [true, true, true, false];
    case 9:
      return [true, true, true, true];
    default:
      return [false, false, false, false];
  }
}

onMounted(() => {
  smallBeads.value = translateDigit();
});

watch(
  () => props.digit,
  () => {
    smallBeads.value = translateDigit();
  }
);
</script>

<style></style>
