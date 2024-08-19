import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

import components from '@/components/UI/index.js'

const app = createApp(App)

console.log(components);

components.forEach( component => {
    app.component(component.name, component)
})

app.mount('#app')
