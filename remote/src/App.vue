<template>
  <div class="label-remote">
    <h1>This is the remote App!</h1>
    <div class="flex-align mt">
      <div class="label-remote">
        <div class="mb">State changing on Remote</div>
        <h2>{{ $pinia.state.value.example?.userName }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.label-remote {
  background-color: rgb(170, 247, 187);
  padding: 12px 18px;
  border: 3px dashed rgb(123, 185, 123);
}

.flex-align {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
