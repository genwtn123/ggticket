import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'
import store from './plugins/vuex'
import SweetModal from 'sweet-modal-vue/src/plugin.js'
Vue.use(SweetModal)

Vue.config.productionTip = false
axios.defaults.withCredentials = true

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

