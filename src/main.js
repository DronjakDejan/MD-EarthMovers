/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import { createHead } from '@vueuse/head';
// Composables
import { createApp } from 'vue'

const app = createApp(App)
const head = createHead();
app.use(head);
registerPlugins(app)

app.mount('#app')
