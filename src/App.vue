<script setup>
import { ref } from "vue";

const count = ref(0);

function handleIncrement() {
  count.value++;
}

function handleDecrement() {
  count.value--;
}
</script>

<template>
  <div class="bg-slate-700 p-4 flex flex-col">
    <h1 class="text-orange-500 text-2xl">Counter</h1>
  </div>
  <div class="flex flex-col items-center gap-2 p-4">
    <h1 class="text-2xl">{{ count }}</h1>
    <div class="flex">
      <button
        class="border p-2 self-start rounded-sm"
        @click="handleIncrement"
      >
        Increment
      </button>
      <button
        class="border p-2 self-start rounded-sm"
        @click="handleDecrement"
      >
        Decrement
      </button>
    </div>
  </div>
</template>
