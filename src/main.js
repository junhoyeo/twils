import Vue from 'vue'
import VueCodeHighlight from 'vue-code-highlight'
import marked from 'marked'

import App from './App.vue'
import routes from './router'

import './css/prism-dracula.css'
import './css/github-markdown-css.css'
import './scss/style.scss'

Vue.use(VueCodeHighlight)
Vue.prototype.marked = marked

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: routes,
  render: h => h(App)
})
