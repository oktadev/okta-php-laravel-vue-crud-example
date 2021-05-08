import Vue from 'vue'
import VueRouter from 'vue-router'
import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue, { LoginCallback } from '@okta/okta-vue'
import Dashboard from './components/Dashboard.vue'
import TriviaGame from './components/TriviaGame.vue'

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-354685.oktapreview.com/oauth2/default',
  clientId: '0oahuzil3ucrOYmc20h7',
  redirectUri: window.location.origin + '/callback',
  scopes: ['openid', 'profile', 'email']
})
Vue.use(OktaVue, { oktaAuth })

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/callback', component: LoginCallback },
  { path: '/trivia', component: TriviaGame }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(Dashboard)
}).$mount('#app')
