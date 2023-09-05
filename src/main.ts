import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

if (import.meta.env.MODE === 'development') {
  const { worker } = await import("./mocks/browser");
  worker.start()
}

createApp(App).mount('#app')
