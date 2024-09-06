<script setup>
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue';

defineProps({
    store: Object,
})

// i will use authStore with refactor agine becouse the store is not working , check that if you can Mr Mohammed
const authStore = useAuthStore();
const imageCardGeneral = ref(null)
const imageCardLiving = ref(null)
const imageCardProff = ref(null)


// upload image file to state managment 
const cardGeneral = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    console.log(reader);
    reader.onload = e =>{
        imageCardGeneral.value = e.target.result;
        console.log(imageCardGeneral.value);
    };
    authStore.fileCardGeneral =  event.target.files[0];
}
const proffFiles = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    console.log(reader);
    reader.onload = e =>{
        imageCardProff.value = e.target.result;
        console.log(imageCardProff.value);
    };
    authStore.fileCardProff = event.target.files[0];
}

const cardLiving = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    console.log(reader);
    reader.onload = e =>{
        imageCardLiving.value = e.target.result;
        console.log(imageCardLiving.value);
    };
    authStore.fileCardliving = event.target.files[0];
}







</script>

<template>
    <main class="content-center .w-full my-0 mx-auto text-center ">
        <h2 class="w-full text-center text-2xl font-bold mb-3 text-amber-500">انشاء حساب</h2>
        <div class="add-documents flex flex-wrap justify-end w-full my-0 mx-auto  ">
            <div class="single-documents flex w-80 m-5 flex-col text-end  ">
                <p class="text-gray-500">بطاقة السكن</p>
                <label :for="card-living" class="label-add w-full flex align-center flex-col justify-center text-center cursor-pointer m-5 h-40 rounded-lg border-2 border-yellow-500 border-dashed text-yellow-500 ">
                    <input @change="cardLiving" :id="card-living" name="card-living" type="file" hidden />
                    <img :src="imageCardLiving" alt="card living image" class="w-full h-full rounded-lg" v-if="imageCardLiving !== null" >
                    <i class="fa-solid fa-arrow-up-from-bracket" v-if="imageCardLiving === null"></i>
                    <p v-if="imageCardLiving === null">ارفاق</p>
                </label>
            </div>
            <div class="single-documents flex w-80 m-5 flex-col text-end">
                <p class="text-gray-500" >بطاقة موحدة</p>
                <label :for="card-general" class="label-add  w-full flex align-center flex-col justify-center text-center cursor-pointer m-5 h-40 rounded-lg border-2 border-yellow-500 border-dashed text-yellow-500 ">
                    <input @change="cardGeneral" :id="card-general" name="card-general" type="file" hidden/>
                    <img :src="imageCardGeneral" alt="card living image" class="w-full h-full rounded-lg" v-if="imageCardGeneral !== null" >
                    <i class="fa-solid fa-arrow-up-from-bracket" v-if="imageCardGeneral === null"></i>
                    <p v-if="imageCardGeneral === null">ارفاق</p>
                </label>
            </div>
            <div class="single-documents flex w-80 m-5 flex-col text-end" v-if="store.role=== 'business'">
                <p class="text-gray-500"> وثيقة اثبات الملكية</p>
                <label :for="proff-files" class="label-add  w-full flex align-center flex-col justify-center text-center cursor-pointer m-5 h-40 rounded-lg border-2 border-yellow-500 border-dashed text-yellow-500 ">
                    <input @change="proffFiles" :id="proff-files" name="proff-files" type="file" hidden/>
                    <img :src="imageCardProff" alt="card living image" class="w-full h-full rounded-lg" v-if="imageCardProff !== null" >
                    <i class="fa-solid fa-arrow-up-from-bracket" v-if="imageCardProff === null"></i>
                    <p v-if="imageCardProff === null">ارفاق</p>
                </label>
                <p class="text-black">هذه الوثيقة ضرورية لأثبات ملكية الفرع
                    <i class="fa-solid fa-triangle-exclamation"></i>          </p>
            </div>
        </div>
    </main>
</template>



<style>


    @media (max-width:767px) {
        .content-center .add-documents {
            text-align: center;
            justify-content: center;
        }
        .content-center .add-documents .single-documents{
            width: 80%;
        }
    }
    .content-center .add-documents .single-documents .label-add{
        background-color: #F59E0B0D;
        box-shadow: 0px 4px 4px 0px #A1A1AA33;
    }

</style>