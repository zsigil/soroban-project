import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSorobanStore = defineStore('soroban', {
  state: () => ({ sorobanNumber: 73, columnNumber: 13, sorobanError: false }),
  getters: {
    getSorobanNumberList() {
      this.sorobanError = false;
      let zeros = [];
      let firstList = this.sorobanNumber.toString().split('')
      if (firstList.length > this.columnNumber) {
        this.sorobanError = true;
        return new Array(this.columnNumber).fill(0);
      }
      zeros = new Array(this.columnNumber - firstList.length).fill(0);
      let digitList = firstList.map((d) => d * 1)
      return [...zeros, ...digitList]
    }
  },
  actions: {
    setSorobanNumber(newValue) {
      this.sorobanNumber = newValue;
    }
  },
})
