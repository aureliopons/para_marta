// Import Vue
import { createApp } from 'vue';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

// Import Framework7 Styles
//import 'framework7/framework7-bundle.css';
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
import '../css/flexboxgrid.css'; //http://flexboxgrid.com/
import '../css/spaces.css'; //https://github.com/badabam/css-spaces

// Import App Component
import App from '../components/app.vue';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
const app = createApp(App);

// Register Framework7 Vue components
registerComponents(app);

import MenuIzdo from '../components/menu_izdo.vue';
import Barra from '../components/barra.vue';
import PanoramaCard from '../components/PanoramaCard.vue';
import PanoramaCarrousel from '../components/PanoramaCarrousel.vue';
app.component('MenuIzdo', MenuIzdo);
app.component('Barra', Barra);
app.component('PanoramaCard', PanoramaCard);
app.component('PanoramaCarrousel', PanoramaCarrousel);

// Mount the app
app.mount('#app');