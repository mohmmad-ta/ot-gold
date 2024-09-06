import './assets/main.css'
import "../axios/axios";
import KU from "./locale/ku.json";
import EN from "./locale/en.json";
import AR from "./locale/ar.json";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

const i18n = createI18n({
    locale: 'EN',
    messages: {
        EN: EN,
        AR: AR,
        KU: KU
    }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
