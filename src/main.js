import Vue from 'vue'
import marked from 'marked'

import App from './App.vue'
import routes from './router'

import './css/github-markdown-css.css'
import './css/style.css'

Vue.prototype.marked = marked

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: routes,
  render: h => h(App)
})
