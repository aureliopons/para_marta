<template>
  <f7-page name="perfil">
    <f7-navbar title="Perfil" back-link="Back"></f7-navbar>
    <f7-block class="m-0 p-0" style="height: 200px; background-size: cover; background-image: url(/assets/img/perfil-machupichu.png)">
     <div class="row end-md"> 
      <i style="font-size: var(--spaces-xl);" class="icon f7-icons card-icon color-white">arrowshape_turn_up_right_fill</i>
     </div>
    </f7-block>
    <f7-block class="p-s m-0">

    <f7-block style="border-bottom:1px solid #DADADA;" class="m-0  pt-l pb-l p-s">
      <div class="row between-xs middle-xs">
        <div class="row between-xs gap-m  middle-xs">
        <div class="column">
          <div class="circle-image-large"><img src="/assets/img/user.jpeg" alt=""></div>
          <p class="m-0">700/1000</p>
          <f7-button fill raised class="btn-follow">Seguir</f7-button>
        </div>
         <div>
            <div class="row middle-xs gap-s">
              <h3>Juanito Rodríguez</h3>
              <i class="icon f7-icons card-icon color-green">checkmark_alt_circle_fill</i>
            </div>
            <div class="row middle-xs gap-s">
              <div class="column">
                <p class="h2">4.200</p>
                <p class="m-0">Seguidores</p>
              </div>
              <div class="column">
                <p class="h2">1.750</p>
                <p class="m-0">Seguidos </p>
              </div>
            </div>
          </div>
      </div>

          <div>
            <h3 class="title-bronce">Bronce</h3>
            <div class="bronce"><p class="m-0">#8</p></div>
          </div>
      </div>
        <p>Bienvenido al Club de ciclos de diversos generos músicales. <br> Abierto de Lunes a Sábado. <br> El club de culto en el corazón de Bellavista ✨. <br> Cumpleaños 👉+56 9 23823450 📱</p>
    </f7-block>
    <CardEventPerfil></CardEventPerfil>
    </f7-block>
    
  </f7-page>
</template>
