<script setup>
import { useAuthStore } from '@/stores/authStore';

defineProps({
  store: Object,
})
const authStore = useAuthStore()
const checkAgreePrivacy = (e) => {
    authStore.checkAgreePrivacyPolicy = e.target.checked
    console.log(authStore.checkAgreePrivacyPolicy)
}
</script>

<template>
    <div class=" w-4/5 felx my-0 mx-auto text-center">
        <h2 class="w-full text-center text-2xl font-bold mb-3 text-amber-500">انشاء حساب</h2>
        <div class="bg-white w-11/12 p-10 relative text-center my-0 mx-auto rounded-lg">
            <textarea class="w-full rounded-lg resize-none text-gray-400 p-5 focus:outline-none"  name="privacy-policy" cols="100" rows="15">
                Privacy Policy 
                Introduction
                Welcome to [Your Company Name]! Your privacy is very important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [your website URL] and use our services. Please read this policy carefully to understand our views and practices regarding your personal data.
                Information We Collect
                We collect information about you in various ways:
                Personal Data: When you register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form, you may be asked to enter your name, email address, mailing address, phone number, or other details.
                Usage Data: We automatically collect information about your visit to our site, such as your IP address, browser type, referring/exit pages, and the dates and times of your visits.
                Cookies and Tracking Technologies: We use cookies to enhance your experience, gather general visitor information, and track visits to our website. You can choose to turn off cookies through your browser settings.
                How We Use Your Information
                We may use the information we collect from you in the following ways:
                To personalize your experience and deliver content and product offerings relevant to your interests.
                To improve our website and customer service based on the feedback we receive from you.
                To process transactions and manage your orders.
                To send periodic emails regarding your order or other products and services.
                To follow up with you after correspondence (live chat, email, or phone inquiries).
                How We Protect Your Information
                We implement a variety of security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.
                Sharing Your Information
                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                Third-Party Links
                Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites.
                Your Consent
                By using our site, you consent to our website privacy policy.
                Changes to Our Privacy Policy
                If we decide to change our privacy policy, we will post those changes on this page. Policy changes will apply only to information collected after the date of the change.
                Contacting Us
                If there are any questions regarding this privacy policy, you may contact us using the information below:
                [Your Company Name]
                [Your Company Address]
                [Your Company Email]
                [Your Company Phone Number]
                Last Updated: [Date]
            </textarea>
            <p class="absolute left-4 top-4 font-bold">privacy policy </p>
        </div>

        <div class="flex items-center justify-end m-5">
            <label for="link-checkbox" class="ms-2 text-sm font-medium text-black-900 dark:text-gray-300">قرأت الشروط  <a href="#" class="text-yellow-600 dark:text-yellow-500 hover:underline">وأوافق على سياسة الخصوصية   </a>.</label>
            <input id="link-checkbox" @change="checkAgreePrivacy" type="checkbox" value="" class="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </div>

    </div>
</template>


<style scoped>
    
    
    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        border-radius: 2px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: #a1a1a1;
    }

    
</style>