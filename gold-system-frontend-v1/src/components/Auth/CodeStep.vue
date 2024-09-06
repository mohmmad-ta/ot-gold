<script setup>
defineProps({
  store: Object,
})
</script>

<template>
    <div class="content-center">
        <h2 class="w-full text-center text-2xl font-bold mb-3 text-amber-500">انشاء حساب</h2>
        <div class="content-code-check w-3/4 my-0 mx-auto">
            <p class="text-right text-gray-500 p-10">سيتم ارسال الكود في مدة لا تتجاوز العشر دقائق</p>
            <div class="codes flex justify-between w-2/3 my-0 mx-auto p-2">
                <span class="w-12 h-12 bg-gray-900 text-yellow-500 text-center p-1 border-2 border-yellow-500 rounded-lg text-3xl ">3</span>
                <span class="w-12 h-12 bg-gray-900 text-yellow-500 text-center p-1 border-2 border-yellow-500 rounded-lg text-3xl ">3</span>
                <span class="w-12 h-12 bg-gray-900 text-yellow-500 text-center p-1 border-2 border-yellow-500 rounded-lg text-3xl ">3</span>
                <span class="w-12 h-12 bg-gray-900 text-gray-500 text-center p-1 border-2 border-gray-500 rounded-lg text-3xl ">-</span>
                <span class="w-12 h-12 bg-gray-900 text-gray-500 text-center p-1 border-2 border-gray-500 rounded-lg text-3xl ">-</span>
                <span class="w-12 h-12 bg-gray-900 text-gray-500 text-center p-1 border-2 border-gray-500 rounded-lg text-3xl ">-</span>
            </div>
            <p  class="text-right text-gray-500 ">30 s <i class="fa-solid fa-rotate"></i></p>
            <p  class="text-right font-bold pt-2">طلب اعادة ارسال </p>
        </div>
    </div>
</template>

<style>
@media (max-width:767px) {
    .content-code-check{
        width: 100%;
    }
    .content-code-check .codes{
        width: 100%;
    }
}
</style>