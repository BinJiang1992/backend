import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const context = require.context('../views', true, /router\.js$/);
console.log('router', context)
const routes = context
  .keys()
  .map(item => context(item).default)

export default new Router({
  routes,
})
