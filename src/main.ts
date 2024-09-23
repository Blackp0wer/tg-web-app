import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueTelegramPlugin } from 'vue-tg'
import router from './router'

const app = createApp(App)


app.use(VueTelegramPlugin)
app.use(router)
app.mount('#app')
