<script setup>
import { ref } from "vue";
import WebApp from "@twa-dev/sdk";

const count = ref(0);

function handleIncrement() {
  count.value++;
}

function handleDecrement() {
  count.value--;
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <button
      class="border px-8 py-2 rounded-3xl text-[#fff] bg-[#08c] font-medium"
      @click="WebApp.showAlert('Hello World!')"
    >
      Show Alert
    </button>
  </div>
</template>
