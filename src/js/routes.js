
import Ayuda1Page from '../pages/ayuda-1.vue';
import Ayuda2Page from '../pages/ayuda-2.vue';
import Lateral from '../components/lateral.vue';
import Notificaciones from '../components/notificaciones.vue';
import Filtros from '../components/filtros.vue';

import HomePage from '../pages/home.vue';
import EventoPage from '../pages/evento.vue';
import PerfilPage from '../pages/perfil.vue';
import CrearPage from '../pages/crear.vue';

import LoginPage from '../pages/login.vue';
import IniciarSesionPage from '../pages/iniciar_sesion.vue';
import RegistrarsePage from '../pages/registrarse.vue';
import CategoriasPage from '../pages/categorias.vue';
import GraciasPage from '../pages/gracias.vue';

import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';
import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [  
  { path: '/ayuda-1/',        component: Ayuda1Page },
  { path: '/ayuda-2/',        component: Ayuda2Page },
  { path: '/lateral/',        component: Lateral },
  { path: '/notificaciones/', component: Notificaciones },
  { path: '/filtros/',        component: Filtros },
  
  { path: '/home/',           component: HomePage },
  { path: '/evento/',         component: EventoPage },
  { path: '/perfil/',         component: PerfilPage },
  { path: '/crear/',          component: CrearPage },

  { path: '/login/',          component: LoginPage },
  { path: '/iniciar/',        component: IniciarSesionPage },
  { path: '/registro/',       component: RegistrarsePage },
  { path: '/categorias/',     component: CategoriasPage },
  { path: '/gracias/',        component: GraciasPage },


  { path: '/',  component: HomePage,   },
  { path: '/about/', component: AboutPage, },
  { path: '/form/', component: FormPage, },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
