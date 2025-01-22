<script setup lang="ts">
import PanoramaCardFull from '../components/PanoramaCardFull.vue';

</script>


import barra from './barra.vue'<template>
  <f7-page name="home">
    <!-- Top Navbar -->

    <f7-navbar >
    <f7-nav-left>
      <f7-link icon-material="menu" panel-open="left"></f7-link>
    </f7-nav-left>
    <f7-nav-title>
      <img src="/assets/img/logo_vamoh.png" alt="Vamoh Logo" style="height: 20px;">
    </f7-nav-title >
    <f7-nav-right>
      <f7-link icon-material="notifications" panel-open="right"></f7-link>
    </f7-nav-right> 
  </f7-navbar>
  
    <f7-searchbar search-container=".search-list" search-in=".item-title" placeholder="Buscar panorama">
      <f7-link style="margin:0 10px;" icon-material="tune" popup-open="#filter-popup"></f7-link>
    </f7-searchbar>

    <!-- Toolbar-->
    <f7-toolbar bottom>
      <barra />
    </f7-toolbar>
    <!-- Page content-->

    <f7-block strong>
      <f7-row style="gap: 11px; justify-content: flex-start">
       
          <f7-button fill raised Distancia="#distancia" class="btn-small">Distancia</f7-button>
        
          <f7-button fill raised Fecha="#fecha" class="btn-small">Fecha</f7-button>
        
          <f7-button fill raised Categoria="#categoria" class="btn-small">Categoría</f7-button>
        
          <f7-button fill raised Precio="#precio" class="btn-small">Precio</f7-button>
        
      </f7-row>
    </f7-block>


  <panorama-card-full></panorama-card-full>

    <f7-block-title style="display: flex; flex-direction:row ; justify-content: space-between; align-items: center; ">
      <h2>Lo más Hot <i class="icon f7-icons card-icon color-orange">sun_max_fill</i></h2> 
      <a href="#">Ver más</a></f7-block-title>
   <panorama-carrousel></panorama-carrousel>
   
   <f7-block-title style="display: flex; flex-direction:row ; justify-content: space-between; align-items: center; ">
      <h2>Lo que se viene HOY!</h2> 
      <a href="#">Ver más</a></f7-block-title>
   <panorama-carrousel></panorama-carrousel>

    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>

    <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#my-popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Panels</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised panel-open="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised panel-open="right">Right Panel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-list>
      <f7-list-item
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      ></f7-list-item>
      <f7-list-item
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      ></f7-list-item>
      <f7-list-item
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<style>
.discount{
  display: block;
  background-color: #2D9A5F;
  border-radius: 0 10px 10px 0;
  padding: 3px 10px;
  color: white;
  font-size: 11px;
  font-weight: 600;
  margin: 6px 0px 0px 0px;


}

</style>