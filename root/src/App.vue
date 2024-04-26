<template>
  <div class="main">
    <div class="root-label">Root App</div>
    <div class="content">
      <div class="routes">
        <RouterLink class="mr" :to="{name: 'Home'}">Root App</RouterLink>
        <RouterLink :to="{name: 'Remote'}">Remote App</RouterLink>
      </div>
      <RouterView/>
      <div class="mt text-center" v-show="$route.name === 'Remote'">
        <div class="root-label mb">State changing on Root</div>
        <h2 class="mb">{{ store.userName }}</h2>
        <button class="btn" @click="() => {
          store.setUserName('Pedro Camaforte')
        }">Click</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useExampleStore } from './stores/exampleStore'

const store = useExampleStore()

</script>

<style>
.text-center {
  text-align: center;
}

.mb {
  margin-bottom: 12px;
}

.mt {
  margin-top: 50px;
}

.mr {
  margin-right: 40px;
}

.main {
  background-color: rgb(255, 208, 215);
  min-height: 100vh;
  width: 100%;
  text-align: left;
  padding: 25px;
}

.content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.routes {
  margin-bottom: 3rem;
}

.root-label {
  color: rgb(163, 91, 91);
  font-weight: 600;
  border: 2px dashed rgb(163, 91, 91);
  padding: 8px 12px;
  width: fit-content;
}

.btn {
  background-color: rgb(226, 43, 113);
  color: white;
  border: none;
}

.btn:focus, .btn:active {
  border: none;
  outline: none;
}
</style>
