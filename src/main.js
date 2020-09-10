import Vue from 'vue'
import App from './App.vue'
import Chakra from '@chakra-ui/vue'
import customTheme from '../custom-theme'

Vue.use(Chakra, {
  extendTheme: customTheme
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
