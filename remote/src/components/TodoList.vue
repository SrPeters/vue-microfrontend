<template>
  <div class="label-remote">
    <p class="todo-label">Add some items to your todo list</p>
    <div>
      <input @keyup.enter="addItem()" v-model="state.modelValue" class="input" type="text">
      <button class="button" @click="addItem()">Add</button>
    </div>
    <ol>
      <li class="li" v-for="i, key in state.items" :key="key">
        <div>{{ i }} <button @click="deleteItem(key)" class="delete"><div class="m4px">x</div></button></div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface State {
  items: string[];
  modelValue: string;
}

const state: State = reactive({
  items: [],
  modelValue: ''
})

function addItem() {
  if (!state.modelValue.trim()) return
  state.items.push(state.modelValue)
  state.modelValue = ''
}

function deleteItem(key:number) {
  state.items.splice(key, 1)
}
</script>

<style scoped>
.label-remote {
  background-color: rgb(170, 247, 187);
  padding: 12px 18px;
  border: 3px dashed rgb(123, 185, 123);
  width: fit-content;
}

.todo-label {
  font-size: 16px;
}

.input {
  line-height: 1.5rem;
  padding: 0px 6px;
  border: 1px solid rgb(207, 207, 207);
  border-radius: 4px;
  font-size: 11px;
  color: rgb(78, 78, 78);
  background-color: rgb(253, 253, 253);
  margin-right: 6px;
}

.input:focus {
  outline: none;  
}

.button {
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  background-color: rgb(65, 65, 65);
  color: white;
  cursor: pointer;
}

.button:active {
  background-color: rgb(95, 95, 95);
}

.delete {
  border: none;
  border-radius: 50%;
  font-weight: bold;
  padding: 2px 8px;
  background-color: rgb(240, 240, 240);
  color: rgb(75, 75, 75);
  cursor: pointer;
  margin-left: 10px;
}

.delete {
  line-height: 1em !important;
}

.delete:active, .delete:focus {
  border: none;
  outline: none;
}

.m4px {
  margin-bottom: 4px;
}

.li {
  margin-bottom: 5px;
}
</style>
