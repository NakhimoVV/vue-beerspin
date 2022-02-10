import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/style.scss'

createApp(App).use(store).mount('#app')