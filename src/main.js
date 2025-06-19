import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


createApp(App).use(router).mount('#app')
