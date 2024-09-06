<script setup>
defineProps({
  steps: Number,
})

</script>

<template>
  <main class="w-full lg:w-80 right-0 top-0 mt-10 lg:mt-0 h-full bg-white py-2 md:py-5">
    <h2 class="w-full text-center text-2xl font-bold text-zinc-900">mohammed</h2>
    <div class="p-10">
      <ul class="gap-3 overflow-x-auto scrollbar-hide justify-center lg:justify-end lg:gap-1.5 flex lg:grid">
        <li :class="steps >= 1 ? `text-amber-500`: `text-zinc-400`" class="text-1xl font-semibold flex items-center justify-end gap-1">نوع الحساب<i class="text-2xl fa-regular fa-circle-check"></i></li>
        <li :class="steps >= 2 ? `text-amber-500`: `text-zinc-400`" class="text-1xl font-semibold flex items-center justify-end gap-1">المعلومات الشخصية<i class="text-2xl fa-regular fa-circle-check"></i></li>
        <li :class="steps >= 3 ? `text-amber-500`: `text-zinc-400`" class="text-1xl font-semibold flex items-center justify-end gap-1">المرفقات<i class="text-2xl fa-regular fa-circle-check"></i></li>
        <li :class="steps >= 4 ? `text-amber-500`: `text-zinc-400`" class="text-1xl font-semibold flex items-center justify-end gap-1">سياسة الخصوصية<i class="text-2xl fa-regular fa-circle-check"></i></li>
        <li :class="steps >= 5 ? `text-amber-500`: `text-zinc-400`" class="text-1xl font-semibold flex items-center justify-end gap-1">تاكيد الحساب<i class="text-2xl fa-regular fa-circle-check"></i></li>
      </ul>
    </div>
  </main>
</template>
