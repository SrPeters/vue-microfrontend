import { defineStore } from 'pinia'

interface State {
  count: number;
  userId: number | null;
  userName: string;
}

export const useExampleStore = defineStore('example', {
  state: (): State => {
    return {
      count: 0,
      userId: null,
      userName: ''
    }
  },
  actions: {
    increment() {
      this.count++
    },
    setUserId(id:number) {
      this.userId = id
    },
    setUserName(name:string) {
      this.userName = name
    }
  },
})