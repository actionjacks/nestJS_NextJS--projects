import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from '@/components/teams/TeamsList.vue';
import TeamMembers from '@/components/teams/TeamMembers.vue';
import TeamsFooter from '@/components/teams/TeamsFooter.vue';

import UsersList from '@/components/users/UsersList.vue';
import UsersFooter from '@/components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    // or we can use alias
    // { path: '/teams', component: TeamsList, alias:'/' },
    //but url not change
    {
      name: 'teams',
      path: '/teams',
      //optional
      meta: { needsAuth: true }, //can check if user is auth
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'teams-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    //queyr : string can be passed as props
    //props will be teamId
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      //run this before change route
      beforeEnter(to, from, next) {
        console.log(to, from, next);
      },
    },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
  // can use difrent class to style active link
  linkActiveClass: 'active',
  //optional scroll behavior
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);

    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});
//beforeEach will be call callback function when route change
router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  if (to.meta.needsAuth) {
    console.log('need auth');
    next();
  }
  next();
});

//after change route
router.afterEach((to, from) => {
  console.log(to, from); //god to sending analytics data
});

export default router;
