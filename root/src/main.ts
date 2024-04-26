import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import router from './routes/router'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

const TodoList = defineAsyncComponent(() => import('remoteApp/TodoList'))
const app = createApp(App)
app.component('TodoList', TodoList)

app
.use(router)
.use(pinia)
.mount('#app')
