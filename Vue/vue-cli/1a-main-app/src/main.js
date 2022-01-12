import { createApp, defineAsyncComponent } from 'vue';
//defineAsyncComponent - serve component only if we needed for optimalization
import App from './App.vue';
import router from './router';
import store from './store/index';

import BaseCard from './components/ui/BaseCard';
import BaseButton from './components/ui/BaseButton';
import BaseBadge from './components/ui/BaseBadge';
import BaseSpinner from './components/ui/BaseSpinner';
//for optimalization use fefinceAsync use callback import
//import BaseDialog from './components/ui/BaseDialog';
const BaseDialog = defineAsyncComponent(() =>
  import('./components/ui/BaseDialog')
);

createApp(App)
  .use(router)
  .use(store)
  .component('base-card', BaseCard)
  .component('base-button', BaseButton)
  .component('base-badge', BaseBadge)
  .component('base-spinner', BaseSpinner)
  .component('base-dialog', BaseDialog)
  .mount('#app');
