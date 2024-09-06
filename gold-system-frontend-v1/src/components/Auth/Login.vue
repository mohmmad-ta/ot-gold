<script setup>
import {ref} from "vue";
import axios from "axios";

defineProps({
  store: Object,
})
const email = ref("")
const password = ref("")
const alert = ref("")
const role = ref("user")
const loginAPI = async ()=>{
  if (email.value === '' && password.value === ''){
    alert.value = "يرجى ادخال جميع المعلومات المطلوبة"
  }else if (role.value === "user"){
    await axios({
      method:'POST',
      url:'end-user/login',
      headers: {'Content-Type': 'multipart/form-data' },
      data:{
        credential: email.value,
        password: password.value
        },
      })
    .then(res => {
        console.log(res)
      localStorage.setItem("token", res.data.result.token.access_token)
    })
    .catch(err => alert.value = err.message)
  }else if (role.value === "business"){
    await axios({
      method:'POST',
      url:'https://ishtar-market.ot.engineering/api/business/login',
      headers: {'Content-Type': 'multipart/form-data' },
      data:{
        credential: email.value,
        password: password.value
        },
      })
    .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.result.token.access_token);
    })
    .catch(err => alert.value = err.message)
  }
}

</script>

<template>
  <main class="w-full md:w-[400px] text-right overflow-hidden grid gap-1">
    <h2 class="w-full text-center text-2xl font-bold mb-3 text-amber-500">تسجيل دخول </h2>
    <form class="text-right">
      <!--   input Role  -->
      <label class="text-zinc-400">اختر نوع الحساب المطلوب</label>
      <div class="flex w-full justify-center gap-3 py-3 font-bold">
        <button @click.prevent="role = 'user'" :class="role === 'user' ? `text-white bg-amber-500`: `text-amber-500 bg-rgba-amber`" class="transition py-1 px-4 w-full gap-2 flex justify-center items-center border-2 border-amber-500 rounded-xl">
          مستخدم<i class="fa-regular fa-user text-lg"></i>
        </button>
        <button @click.prevent="role = 'business'" :class="role === 'business' ? `text-white bg-amber-500`: `text-amber-500 bg-rgba-amber`" class="transition w-full py-1 gap-2 px-4 flex justify-center items-center border-2 border-amber-500 rounded-xl text-amber-500">
          تجاري<i class="fa-solid fa-users text-lg"></i>
        </button>
      </div>
      <!--   input email  -->
      <label class="text-zinc-400">رقم الهاتف او البريد الالكتروني</label>
      <div class="flex text-sm text-zinc-400">
        <input v-model="email" type="text" class="outline-amber-500 w-full text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="ادخل رقم الهاتف">
      </div>
      <!--   input password  -->
      <label class="text-zinc-400">كلمة السر</label>
      <div class="flex text-sm text-zinc-400">
        <input v-model="password" type="password" class="outline-amber-500 w-full text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="ادخل كلمة السر">
      </div>

      <div v-show="alert !== ''" class="w-full flex justify-end items-center text-red-500 bg-redRgb-50 p-2 mt-3 rounded text-sm">{{alert}}</div>
      <div class="flex justify-around mt-4 py-5">
        <button @click.prevent="loginAPI" class="bg-amber-500 text-white rounded-xl py-1 px-4 text-lg font-bold"> login</button>
      </div>
    </form>
  </main>
</template>