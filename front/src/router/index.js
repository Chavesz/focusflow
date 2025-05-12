import Vue from 'vue';
import Router from 'vue-router';
import HomeFocus from '@/views/HomeFocus.vue'; 

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homeFocus',
      component: HomeFocus
    }
  ]
});