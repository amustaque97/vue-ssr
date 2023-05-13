import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import routes from './router'

import viteSSR from 'vite-ssr'
import { createHead } from '@vueuse/head'

export default viteSSR(App, { routes }, (context) => {
  const app = createApp(App)
  const head = createHead();


  // app.use(createPinia())
  app.use(head)

  // app.mount('#app')
  return {head};
});
