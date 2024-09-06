<script setup>
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';
import { reactive, ref } from 'vue';

defineProps({
  store: Object,
})

const authStore = useAuthStore()

</script>

<template>
  <main class="w-full md:w-[500px] text-right overflow-hidden grid gap-1">
    <h2 class="w-full text-center text-2xl font-bold mb-3 text-amber-500">{{$t('language')}}</h2>
    <form class="text-right">
      <!--   input name just for business -->
      <label class="text-zinc-400"  v-if="authStore.role === 'business'">اسم الفرع او المكان التجاري</label>
      <div class="flex gap-2 text-sm"  v-if="authStore.role === 'business'">
        <input v-model="authStore.nameMarket" type="text" class="outline-amber-500 w-full text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="الاسم التجاري">
      </div>

      <!--   input user name   -->
      <label class="text-zinc-400">الاسم</label>
      <div class="flex gap-2 text-sm">
        <input v-model="authStore.firstName" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="الاسم الاول">
        <input v-model="authStore.secondName" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="الاسم الثاني">
        <input v-model="authStore.thirdName" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="الاسم الثالث">
      </div>
      
      <!--   input mothers name   -->
      <label class="text-zinc-400" >mothers name</label>
      <div class="flex gap-2 text-sm text-zinc-400" >
        <input v-model="authStore.motherFirstName" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="اسم الاول">
        <input v-model="authStore.motherSecondName" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="الاسم الثاني">
        <input v-model="authStore.motherThirdName" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="الاسم الثالث">
      </div>
      <div class="flex justify-end items-center gap-1 mt-1 text-xs text-zinc-900" >
        <p>هذا الحقل يستخدم لتاكيد الحساب</p>
        <i class="fa-solid fa-star-of-life text-rose-600 text-[8px]"></i>
      </div>

      <!--   input phone and date   -->
      <label class="text-zinc-400">رقم الهاتف</label>
      <div class="flex gap-2 text-sm text-zinc-400">
        <input v-model="authStore.date" type="date" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl">
        <input v-model="authStore.phoneNumber" type="number" class="outline-amber-500 w-2/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="770-000-0000">
      </div>

      <!--   input Email & gender  -->
      <label class="text-zinc-400">البريد الالكتروني</label>
      <div class="flex gap-2 text-sm text-zinc-400">
        <select v-model="authStore.gender" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl">
          <option value="man">ذكر</option>
          <option value="man">انثى</option>
        </select>
        <input v-model="authStore.email" type="email" class="outline-amber-500 w-2/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="ادخل البريد الالكتروني">
      </div>
      <div class="flex justify-end items-center gap-1 mt-1 text-xs text-zinc-900">
        <p>Connect with your team and bring your creative ideas</p>
        <i class="fa-solid fa-star-of-life text-rose-600 text-[8px]"></i>
      </div>

      <!--   input password  -->
      <label class="text-zinc-400">كلمة السر</label>
      <div v-if="authStore.role === 'user'" class="flex text-sm text-zinc-400">
        <input v-model="authStore.password" type="password" class="outline-amber-500 w-full text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="ادخل كلمة السر">
      </div>
      <div v-else-if="authStore.role === 'business'" class="flex gap-2 text-sm text-zinc-400">
        <select v-model="authStore.typeBusiness" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl">
          <option value="1">Single Branch</option>
          <option value="2">Multi Branch</option>
          <option value="3">Bank</option>
          <option value="4">Insurance Company</option>
          <option value="5">Delivery Company</option>
        </select>
        <input v-model="authStore.password" type="password" class="outline-amber-500 w-2/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="ادخل كلمة السر">
      </div>

      <!--   input number   -->
      <div class="flex gap-2">
        <div class="w-full">
          <label class="text-zinc-400">رقم البطاقة الموحدة</label>
          <div class="flex gap-2 text-sm">
            <input v-model="authStore.numberUnifiedCard" type="number" class="outline-amber-500 w-full text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="ادخل رقم البطاقة">
          </div>
        </div>
        <div class="w-full">
          <label class="text-zinc-400">رقم بطاقة السكن</label>
          <div class="flex gap-2 text-sm">
            <input v-model="authStore.numberHousingCard" type="number" class="outline-amber-500 w-full text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="ادخل رقم البطاقة">
          </div>
        </div>
      </div>
      <!--   input location   -->
      <label class="text-zinc-400">الموقع</label>
      <div class="flex gap-2 text-sm">
        <input v-model="authStore.locationCountry" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="البلد">
        <input v-model="authStore.locationProvince" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="المحافضة">
        <input v-model="authStore.locationCity" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="المدينة">
      </div>
      <div v-show="authStore.alert !== ''" class="w-full flex justify-end items-center text-red-500 bg-redRgb-50 p-2 mt-3 rounded text-sm">{{store.alert}}</div>
    </form>
  </main>
</template>
