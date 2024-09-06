<script setup>
import {ref} from "vue";
import axios from "axios";

const nameMarket = ref("")
const firstName = ref("")
const secondName = ref("")
const thirdName = ref("")
const motherFirstName = ref("")
const motherSecondName = ref("")
const motherThirdName = ref("")
const phoneNumber = ref(0)
const date = ref()
const email = ref("")
const password = ref("")
const locationCountry = ref("")
const locationProvince = ref("")
const locationCity = ref("")
const alert = ref("")
const typeBusiness = ref(1)

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const registerNewBranches = async () => {
  if (firstName.value === "" || secondName.value === "" || thirdName.value === "" ||  locationProvince.value === "" || locationCity.value === "" || locationCountry.value === ""){
    alert.value = "يرجى ادخال جميع المعلومات المطلوبة"
  }else if (phoneNumber.value !== 10 && phoneNumber.value.toString().slice(0,2) !== ("77" || "78")){
    alert.value = "رقم الهاتف غير صحيح"
  }else if (regex.test(email.value) === false && email.value !== ''){
    alert.value = "البريد الالكتروني غير صحيح"
  }else if (password.value < 8){
    alert.value = "كلمة السر غير صحيح"
  }else {
    await axios({
      method: 'POST',
      url: 'business/branches',
      headers: {'Content-Type': 'multipart/form-data'},
      data: {
        name: nameMarket.value,
        type: typeBusiness.value,
        country: locationCountry.value,
        province: locationProvince.value,
        city: locationCity.value,
        official_document_file: "",
        location_cords: null,
        user: {
          name: firstName.value + ' ' + secondName.value + ' ' + thirdName.value,
          mother_full_name: motherFirstName.value + ' ' + motherSecondName.value + ' ' + motherThirdName.value,
          phone_number: phoneNumber.value,
          email: email.value,
          password: password.value
        }
      },
    })
        .then(res => {
          console.log(res)
        })
        .catch(err => console.error(alert.value = err.message))
  }
}
</script>

<template>
  <main class="w-full md:w-[500px] text-right overflow-hidden grid gap-1">
    <h2 class="w-full text-center text-2xl font-bold mb-3 text-amber-500">انشاء فرع</h2>
    <form class="text-right">

      <!--   input name -->
      <label class="text-zinc-400">اسم الفرع او المكان التجاري</label>
      <div class="flex gap-2 text-sm">
        <input v-model="nameMarket" type="text" class="outline-amber-500 w-full text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="الاسم التجاري">
      </div>

      <!--   input user name   -->
      <label class="text-zinc-400">الاسم</label>
      <div class="flex gap-2 text-sm">
        <input v-model="firstName" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="الاسم الاول">
        <input v-model="secondName" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="الاسم الثاني">
        <input v-model="thirdName" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="الاسم الثالث">
      </div>

      <!--   input mothers name   -->
      <label class="text-zinc-400" >mothers name</label>
      <div class="flex gap-2 text-sm text-zinc-400" >
        <input v-model="motherFirstName" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="اسم الاول">
        <input v-model="motherSecondName" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="الاسم الثاني">
        <input v-model="motherThirdName" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="الاسم الثالث">
      </div>

      <!--   input phone and date   -->
      <label class="text-zinc-400">رقم الهاتف</label>
      <div class="flex gap-2 text-sm text-zinc-400">
        <select v-model="typeBusiness" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl">
          <option value="1">Business 1</option>
          <option value="2">Business 2</option>
          <option value="3">Business 3</option>
          <option value="4">Business 4</option>
          <option value="5">Business 5</option>
        </select>
        <input v-model="phoneNumber" type="number" class="outline-amber-500 w-2/3 text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="770-000-0000">
      </div>

      <!--   input Email & gender  -->
      <label class="text-zinc-400">البريد الالكتروني</label>
      <div class="flex gap-2 text-sm text-zinc-400">
        <input v-model="email" type="email" class="outline-amber-500 w-full text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="ادخل البريد الالكتروني">
      </div>
      <div class="flex justify-end items-center gap-1 mt-1 text-xs text-zinc-900">
        <p>Connect with your team and bring your creative ideas</p>
        <i class="fa-solid fa-star-of-life text-rose-600 text-[8px]"></i>
      </div>

      <!--   input password  -->
      <label class="text-zinc-400">كلمة السر</label>
      <div class="flex text-sm text-zinc-400">
        <input v-model="password" type="password" class="outline-amber-500 w-full text-right border-zinc-200 border-1 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="ادخل كلمة السر">
      </div>

      <!--   input location   -->
      <label class="text-zinc-400">الموقع</label>
      <div class="flex gap-2 text-sm">
        <input v-model="locationCountry" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="البلد">
        <input v-model="locationProvince" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="المحافضة">
        <input v-model="locationCity" type="text" class="outline-amber-500 w-1/3 text-right border-zinc-200 border-1 text-zinc-400 transition px-3 py-2 bg-zinc-900 rounded-xl" placeholder="المدينة">
      </div>
      <div v-show="alert !== ''" class="w-full flex justify-end items-center text-red-500 bg-redRgb-50 p-2 mt-3 rounded text-sm">{{alert}}</div>
      <!--      -->
      <div class="flex justify-around my-4 py-5 ">
        <button @click.prevent="registerNewBranches" class="text-lg font-bold bg-amber-500 text-white rounded-xl py-1 px-4"><i class="fa-solid fa-chevron-left"></i> add</button>
      </div>
    </form>
  </main>
</template>
