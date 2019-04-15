import Vue from 'vue'
import App from './App.vue'
import routes from './router'

import './css/github-markdown-css.css'
import './css/style.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: routes,
  render: h => h(App)
})
