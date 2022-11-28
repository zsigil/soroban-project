<template>
  <div :class="wrapperStyle">
    <div
      @click="handleClick"
      class="bead"
      :class="{ on: on, five: five }"
    ></div>
  </div>
</template>

<script setup>
import { useSorobanStore } from "@/stores/soroban";

const store = useSorobanStore();

const props = defineProps({
  on: {
    type: Boolean,
    default: false,
  },
  five: {
    type: Boolean,
    default: false,
  },
  position: {
    type: Number,
    default: 0,
  },
});

const wrapperStyle = props.five ? "border-b-4 pb-5 p-1" : "px-1 py-[0.5px]";

const handleClick = () => {
  if (props.on) {
    //if bead is already pushed, we need to push it back
    props.five
      ? store.setSorobanNumber(
          store.sorobanNumber - 5 * Math.pow(10, props.position)
        )
      : store.setSorobanNumber(
          store.sorobanNumber - Math.pow(10, props.position)
        );
  } else {
    //push bead
    props.five
      ? store.setSorobanNumber(
          store.sorobanNumber + 5 * Math.pow(10, props.position)
        )
      : store.setSorobanNumber(
          store.sorobanNumber + Math.pow(10, props.position)
        );
  }
};
</script>
