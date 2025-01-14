<template>
  <f7-page>
    <f7-navbar title="UX/UI"></f7-navbar>
    <f7-block-title>On-boarding</f7-block-title>
    <f7-list>
      <f7-list-item link="/login/"          view=".view-main" panel-close title="Selector login"></f7-list-item>
      <f7-list-item link="/iniciar/"        view=".view-main" panel-close title="Iniciar Sesión"></f7-list-item>
      <f7-list-item link="/registro/"       view=".view-main" panel-close title="Registrarse"></f7-list-item>
      <f7-list-item link="/categorias/"     view=".view-main" panel-close title="Categorías"></f7-list-item>
      <f7-list-item link="/gracias/"        view=".view-main" panel-close title="Gracias"></f7-list-item>
    </f7-list>
    <f7-block-title>Paneles</f7-block-title>
    <f7-list>
      <f7-list-item link="/ayuda-1/"        title="Ayuda 1"></f7-list-item>
      <f7-list-item link="/ayuda-2/"        title="Aduda 2"></f7-list-item>
      <f7-list-item link="/lateral/"        title="Izda: Menú Lateral"></f7-list-item>
      <f7-list-item link="/notificaciones/" title="Dcha: Notificaciones"></f7-list-item>
      <f7-list-item link="/filtros/"        title="Filtros"></f7-list-item>
    </f7-list>

    <f7-block-title>Páginas</f7-block-title>
    <f7-list>
      <f7-list-item link="/home/"   view=".view-main" panel-close title="Home"></f7-list-item>
      <f7-list-item link="/evento/" view=".view-main" panel-close title="Evento"></f7-list-item>
      <f7-list-item link="/perfil/" view=".view-main" panel-close title="Perfil"></f7-list-item>
      <f7-list-item link="/crear/"  view=".view-main" panel-close title="Crear Evento"></f7-list-item>
    </f7-list>

    <f7-block-title>Otras cosas</f7-block-title>
    <f7-list>
      <f7-list-item view=".view-main" 
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      ></f7-list-item>
      <f7-list-item view=".view-main" 
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      ></f7-list-item>
      <f7-list-item view=".view-main" 
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      ></f7-list-item>
      <f7-list-item link="#" view=".view-main" back panel-close title="Volver"></f7-list-item>

    </f7-list>
  </f7-page>
</template>

<script>
export default {
  name: 'Filtros'
};
</script>