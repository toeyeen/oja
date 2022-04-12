import { defineStore } from 'pinia'

interface State {
  count: Number
}

export const useCountStore = defineStore('index', {
  state: (): State => {
    return {
      count: 0,
    }
  },
  actions: {
    incrementCount(): void {
      this.count++
    },
  },
  getters: {
    getCount: (state) => state.count,
  },
})
