import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import router from './routes/router'
import App from './App.vue'

const TodoList = defineAsyncComponent(() => import('remoteApp/TodoList'))

const app = createApp(App)

app.component('TodoList', TodoList)

app
.use(router)
.mount('#app')
