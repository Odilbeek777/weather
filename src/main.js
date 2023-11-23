import '@assets/scss/main.scss'
import {
    createApp
} from 'vue'
import App from './App.vue'
import {
    store
} from './assets/store'
const app = createApp(App)
app.use(store)

app.mount('#app')