import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import TeamsList from '@/components/teams/TeamsList.vue';
import TeamMembers from '@/components/teams/TeamMembers.vue';
import UsersList from '@/components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    // or we can use alias 
    // { path: '/teams', component: TeamsList, alias:'/' },
    //but url not change
    
    {
      path: '/teams', component: TeamsList,
      children: [
        { path: '/teams/:teamId', component: TeamMembers, props: true },
      ]
    },
    //queyr : string can be passed as props 
    //props will be teamId

    { path: '/users', component: UsersList },
    { path: '/:notFound(.*)', redirect: '/' }
  ],
  // can use difrent class to style active link
  linkActiveClass: 'active',
});

const app = createApp(App);
app.use(router);

app.mount('#app');
