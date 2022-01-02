import { createRouter, createWebHistory } from 'vue-router';
import PlayersList from './pages/players/PlayersList';
import PlayerDetails from './pages/players/PlayerDetails';
import ContactPlayer from './pages/requests/ContactPlayer';
import PlayersRegistration from './pages/players/PlayersRegistration';
import RequestReceived from './pages/requests/RequestReceived';
import NotFound from './pages/NotFound';

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
    { path: '/register', component: PlayersRegistration },
    { path: '/requests', component: RequestReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
