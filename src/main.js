import { createApp } from 'vue'
// import VueSmoothScroll from 'vue3-smooth-scroll'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App)

app.use(router)
// app.use(VueSmoothScroll, {
//     duration: 0,
// })

app.mount('#app')
