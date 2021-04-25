import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import '../node_modules/bulma/css/bulma.css'
import 'bulma/css/bulma.css'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.withCredentials = true

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

