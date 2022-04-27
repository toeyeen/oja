import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FontAwesomeIcon from './plugins/font-awesome'
import router from './router'

import App from './App.vue'

const app = createApp(App)

// Automatically import base components.
const components = import.meta.globEager('./components/*.vue')

Object.entries(components).forEach(([path, definition]: any) => {
  // Get name of component, based on filename
  const componentName = path
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')

  if (componentName.startsWith('Base') || componentName.startsWith('Beta')) {
    app.component(componentName, definition.default)
  }
})

app
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(createPinia())
  .mount('#app')
