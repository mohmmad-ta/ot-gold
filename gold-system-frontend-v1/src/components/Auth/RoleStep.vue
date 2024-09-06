<script setup>
import { useAuthStore } from "@/stores/authStore";
import {ref} from "vue";
defineProps({
  store: Object,
})
const authStore = useAuthStore()


</script>

<template>
  <main class="w-full md:w-[450px] text-right">
    <h2 class="w-full text-center text-2xl font-bold mb-3 text-amber-500">انشاء حساب</h2>
    <span class="text-md text-zinc-900">اختر نوع الحساب المطلوب </span>
    <div class="flex w-full justify-center gap-3 py-3 font-bold">
      <button @click="authStore.role = 'user'" :class="authStore.role === 'user' ? `text-white bg-amber-500`: `text-amber-500 bg-rgba-amber`" class="transition py-4 grid justify-center items-center border-2 border-amber-500 w-20 h-20 md:w-28 md:h-28 rounded-xl">
        <i class="fa-regular fa-user text-2xl"></i>ddd
      </button>
      <button @click="authStore.role = 'business'" :class="authStore.role === 'business' ? `text-white bg-amber-500`: `text-amber-500 bg-rgba-amber`" class="transition py-4 grid justify-center items-center border-2 border-amber-500 w-20 h-20 md:w-28 md:h-28 rounded-xl text-amber-500">
        <i class="fa-solid fa-users text-2xl"></i>ddd
      </button>
    </div>
  </main>
</template>
