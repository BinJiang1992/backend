// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// http 请求 https://www.npmjs.com/package/vue-axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// element-ui  http://element-cn.eleme.io/#/zh-CN/component/quickstart
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// flex.css 弹性盒模型布局 https://cnodejs.org/topic/56d1148d9f876b7e6658579e
import 'flex.css';

Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
