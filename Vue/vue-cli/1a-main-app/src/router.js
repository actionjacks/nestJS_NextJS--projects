import { createRouter, createWebHistory } from 'vue-router';
import PlayersList from './pages/players/PlayersList';
//import PlayerDetails from './pages/players/PlayerDetails';
import ContactPlayer from './pages/requests/ContactPlayer';
import PlayersRegistration from './pages/players/PlayersRegistration';
import RequestReceived from './pages/requests/RequestReceived';
import UserAuth from './pages/auth/UserAuth';
import NotFound from './pages/NotFound';

import store from './store/index';
//optional for optimalization
const PlayerDetails = () => import('./pages/players/PlayerDetails');

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', redirect: '/players' },
    { path: '/players', component: PlayersList },
    {
      path: '/players/:id',
      component: PlayerDetails,
      props: true,
      children: [{ path: 'contact', component: ContactPlayer }], //player/:someid/contact
    },
    {
      path: '/register',
      component: PlayersRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      component: RequestReceived,
      meta: { requiresAuth: true },
    },
    { path: '/auth', component: UserAuth, meta: { requresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requresUnauth && store.getters.isAuthenticated) {
    next('players');
  } else {
    next();
  }
});

export default router;
