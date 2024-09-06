import {ref, computed, onMounted} from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
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
  const gender = ref("")
  const password = ref("")
  const numberUnifiedCard = ref(0)
  const numberHousingCard = ref(0)
  const locationCountry = ref("")
  const locationProvince = ref("")
  const locationCity = ref("")
  const role = ref("user")
  const alert = ref("")
  const fileCardGeneral = ref(null)
  const fileCardliving = ref(null)
  const fileCardProff = ref(null)
  const checkAgreePrivacyPolicy = ref(false)
  const typeBusiness = ref(1)


  const doubleCount = onMounted(() => {
  })
  function increment() {
  }


  return {  doubleCount , alert , typeBusiness,
    
    increment, 
    role , nameMarket,checkAgreePrivacyPolicy,
    fileCardGeneral, fileCardliving, fileCardProff ,
    date, locationProvince , locationCountry, locationCity , 
    firstName, email, phoneNumber, password, gender , numberHousingCard, numberUnifiedCard, 
    secondName, thirdName, motherFirstName, motherSecondName, motherThirdName }
})
