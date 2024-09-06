<script setup>
import SideBar from "@/components/Auth/SideBar.vue";
import RoleStep from "@/components/Auth/RoleStep.vue";
import FormStep from "@/components/Auth/FormStep.vue";
import FilesStep from "@/components/Auth/FielsStep.vue";
import PrivacyStep from "@/components/Auth/PrivacyStep.vue";
import CodeStep from "@/components/Auth/CodeStep.vue";
import Login from "@/components/Auth/Login.vue";
import { useAuthStore } from '@/stores/authStore.js'
import {ref} from "vue";
import axios from "axios";
import { data } from "autoprefixer";
const store = useAuthStore();

const steps = ref(1)
const status = ref(1)
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nextStep = () => {
  if (steps.value === 2 && (store.firstName === "" || store.secondName === "" || store.thirdName === "" || store.date === "" || store.gender === "" || store.locationStreet === "" || store.locationCite === "" || store.locationCountry === "" || store.numberHousingCard === 0 || store.numberUnifiedCard === 0)){
    store.alert = "يرجى ادخال جميع المعلومات المطلوبة"
  }else if (steps.value === 2 && store.phoneNumber !== 10 && store.phoneNumber.toString().slice(0,2) !== ("77" || "78")){
    store.alert = "رقم الهاتف غير صحيح"
    console.log(store.phoneNumber.toString().slice(0,3))
  }else if (steps.value === 2 && (regex.test(store.email) === false && store.email !== '')){
    store.alert = "البريد الالكتروني غير صحيح"
    console.log(regex.test(store.email))
  }else if (steps.value === 2 && store.password < 8){
    store.alert = "كلمة السر غير صحيح"
    console.log(regex.test(store.email))
  }else
  if(steps.value < 5) {
    steps.value ++
  }
  console.log(store.checkAgreePrivacyPolicy)
}

const backStep = () => {
  if (steps.value > 1) {
    steps.value --
  }
}

// register business
const registerAPIBusiness = async () => {
    await axios({
      method:'POST',
      url:'business/register',
      headers: {'Content-Type': 'multipart/form-data' },
      data:{
        name: store.nameMarket,
        type : parseInt(1),
        country : store.locationCountry,
        province:  store.locationProvince,
        city: store.locationCity, 
        official_document_file: store.fileCardliving,
        location_cords: null, 
        user: {
          name: store.firstName + ' ' + store.secondName + ' ' +  store.thirdName,
          mother_full_name :store.motherFirstName + ' ' + store.motherSecondName + ' ' + store.motherThirdName ,
          phone_number: store.phoneNumber,
          email: store.email , 
          password: store.password
        }
        },
      })
    .then(res => {
      localStorage.setItem("token", res.data.result.token);
      console.log(res)
      registerBusinessProfile()
    })
    .catch(err => console.error(err))
    console.log(store.fileCardliving)
}
const registerBusinessProfile = async () => {
  await axios({
    method:'POST',
    url:'end-user/register',
    headers: {'Content-Type': 'multipart/form-data' },
    data:{
      civil_id: store.numberUnifiedCard,
      residence_id : store.numberHousingCard ,
      country: store.locationCountry,
      province: store.locationProvince ,
      city: store.locationCity,
      sex: store.gender,
      location_lat_lng: null,
      date_of_birth: store.date,
      docs: {
        civil_id_img: store,
        residence_id_img: store,
      },
    },
  }).then(res => localStorage.setItem("token", res.data.result.access_token)).catch(err => console.error(err))
}

// end user register
const registerAPIUser = async () => {
    await axios({
      method:'POST',
      url:'end-user/register',
      headers: {'Content-Type': 'multipart/form-data' },
      data:{
        full_name: store.firstName + ' ' + store.secondName + ' ' +  store.thirdName,
        full_mother_name : store.motherFirstName + ' ' + store.motherSecondName + ' ' + store.motherThirdName ,
        phone_number: store.phoneNumber,
        email: store.email ,  
        password: store.password
        },
      })
    .then(res => {
      localStorage.setItem("token", res.data.result.token);
      console.log(res)
      registerUserProfile()
    })
    .catch(err => console.error(err))
}

const registerUserProfile = async () => {
  await axios({
    method:'POST',
    url:'end-user/register',
    headers: {'Content-Type': 'multipart/form-data' },
    data:{
      civil_id: store.numberUnifiedCard,
      residence_id : store.numberHousingCard ,
      country: store.locationCountry,
      province: store.locationProvince ,
      city: store.locationCity,
      sex: store.gender,
      location_lat_lng: null,
      date_of_birth: store.date,
      docs: {
        civil_id_img: store,
        residence_id_img: store,
      },
    },
  })
      .then(res => localStorage.setItem("token", res.data.result.access_token))
      .catch(err => console.error(err))
}

</script>

<template>
  <main>
    <!--  start register page   -->
    <div v-if="status === 0" class="bg-zinc-50 min-h-screen block lg:flex">
      <SideBar :steps="steps" class="lg:fixed" />
      <div class="w-full mr-0 lg:mr-80 flex justify-center items-center px-6 py-4 mb-4 lg:p-18">
        <div class="w-full text-right grid h-fit justify-center ">
          <RoleStep :store="store" v-show="steps === 1" />
          <FormStep :store="store" v-show="steps === 2" />
          <FilesStep :store="store" v-show="steps === 3" />
          <PrivacyStep :checkAgreePrivacyPolicy="checkAgreePrivacyPolicy" :store="store" v-show="steps === 4" />
          <CodeStep :store="store" v-show="steps === 5" />
          <div class="flex justify-around my-4 py-5 ">
            <button v-if="steps < 4" @click="nextStep" class="text-lg font-bold bg-amber-500 text-white rounded-xl py-1 px-4"><i class="fa-solid fa-chevron-left"></i> next</button>
            <button v-if="steps === 4 && store.role=== 'business'" 
              @click="registerAPIBusiness" 
              class="bg-amber-500 text-white rounded-xl py-1 px-4 text-lg font-bold"><i class="fa-solid fa-chevron-left"></i> send</button>
            <button v-if="steps === 4 && store.role=== 'user'" 
              @click="registerAPIUser" :disabled="!store.checkAgreePrivacyPolicy"
              :class="{
                'bg-amber-500 ': store.checkAgreePrivacyPolicy,
                'bg-amber-100 text-zinc-300 cursor-not-allowed': !store.checkAgreePrivacyPolicy
              }"
              class="bg-amber-500 text-white rounded-xl py-1 px-4 text-lg font-bold"><i class="fa-solid fa-chevron-left"></i> send</button>
            <button v-if="steps > 1 && steps < 5" @click="backStep" class="bg-zinc-100 text-zinc-500 rounded-xl py-1 px-4 text-lg font-bold">back <i class="fa-solid fa-chevron-right"></i></button>
            <button v-if="steps === 5" @click="backStep" class="bg-amber-500 text-white rounded-xl py-1 px-4 text-lg font-bold">تاكيد</button>
          </div>
          <span v-show="steps === 1" class="text-zinc-400 w-full">املك حساب مسيقا<span @click="status = 1" class="text-amber-500 font-bold cursor-pointer"> تسجيل دخول</span> </span>
        </div>
      </div>
    </div>
    <!--  End register page   -->
    <!--  Start login page   -->
    <div v-else-if="status === 1" class="w-full text-right flex justify-center items-center min-h-screen p-6 lg:p-18">
      <div class="w-full grid h-fit justify-center">
        <Login :store="store" />
        <span class="text-zinc-400 w-full">لا املك حساب مسيقا<span @click="status = 0" class="text-amber-500 font-bold cursor-pointer"> انشاء حساب</span> </span>
      </div>
    </div>
    <!--  End login page   -->
  </main>
</template>