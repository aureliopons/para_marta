<template>
  <f7-page name="evento">
    <f7-navbar style="position: fixed; background-color: transparent;;" title="" back-link=""></f7-navbar>
    <slider-evento></slider-evento>
    <f7-block class="p-s m-0">
    <f7-block style="border-bottom:1px solid #DADADA;" class="m-0  pt-l pb-l p-s row middle-xs between-xs">
      <div class="row middle-xs gap-s">
        <div>
          <div class="circle-image-large"><img src="/assets/img/logo-ambar.png" alt=""></div>
          <div class="row middle-xs center-xs" style="position:absolute; bottom: 5px; left: 50px; background-color: var(--f7-theme-color); color: white; border-radius: 20px; width: 20px; height: 20px;">
            <p class="m-0">+</p>
        </div>
        </div>
  
        <div>
            <div class="row middle-xs gap-s">
              <h3>Club Ambar</h3>
              <i class="icon f7-icons card-icon color-green">checkmark_alt_circle_fill</i>
            </div>
            
            <div class="row gap-s middle-xs">
            <h5>5,5</h5>
            <div class="row between-xs middle-xs "><i class="icon f7-icons card-icon color-yellow">star_fill</i><i class="icon f7-icons card-icon color-yellow">star_fill</i><i class="icon f7-icons card-icon color-yellow">star_fill</i><i class="icon f7-icons card-icon color-yellow">star_fill</i><i class="icon f7-icons card-icon color-yellow">star_fill</i></div>
            </div>
        </div>
      </div>
        
        <div>
            <div class="row  middle-xs gap-s">
              <i class="icon f7-icons card-icon color-yellow">checkmark_shield_fill</i>
              <h4>Top creador</h4>
            </div>
            <h5>(10432 opiniones)</h5>
        </div>
      </f7-block>
      <f7-block style="border-bottom:1px solid #DADADA;" class="m-0 pt-l pb-l p-s row middle-xs between-xs">
        <div class="row middle-xs gap-l">
          <h3>Colaboradores:</h3>
          <div class="row middle-xs gap-s">
            <div class="circle-image"><img src="/assets/img/logo-ambar.png" alt=""> </div>
            <div class="circle-image"><img src="/assets/img/logo-ambar.png" alt=""> </div>
            <div class="circle-image"><img src="/assets/img/logo-ambar.png" alt=""> </div>
          </div>
        </div>
      </f7-block>
      <f7-block style="border-bottom:1px solid #DADADA;" class="m-0 pt-l pb-l p-s row middle-xs between-xs">
        <div>
          <div class="row  middle-xs gap-s">
              <i class="icon f7-icons card-icon color-black">sticker</i>
              <div>
                <h4 class="m-0">Ticket</h4>
                <p class="m-0">disponibles</p>
              </div>
          </div>
          <div class="row  middle-xs gap-s">
              <i class="icon f7-icons card-icon color-black">calendar_badge_plus</i>
              <div>
                <h4 class="m-0">Fecha</h4>
                <p class="m-0">19/10/2023</p>
              </div>
          </div>
        </div>
        <div>
            <div class="row  middle-xs gap-s">
              <i class="icon f7-icons card-icon color-black">person_alt</i>
              <div>
                <h4 class="m-0">Distancia</h4>
                <p class="m-0">3 KM</p>
              </div>
            </div>
            <div class="row  middle-xs gap-s">
              <i class="icon f7-icons card-icon color-black">person_alt</i>
              <div>
                <h4 class="m-0">Edad Mínima</h4>
                <p class="m-0">H +23 <span style="color:red;">M +20</span></p>
              </div>
          </div>

          
        </div>
        <div>
          <div class="row  middle-xs gap-s">
              <i class="icon f7-icons card-icon color-black">money_dollar</i>
              <div>
                <h4 class="m-0">Precio</h4>
                <p class="m-0">$250 USD</p>
              </div>
          </div>
          <div class="row  middle-xs gap-s">
              <i class="icon f7-icons card-icon color-black">person_2_alt</i>
              <div>
                <h4 class="m-0">Parking</h4>
                <p class="m-0">Dsiponible</p>
              </div>
          </div>
        </div>
      </f7-block>
      <f7-block style="border-bottom:1px solid #DADADA;" class="m-0 pt-l pb-l p-s">
          <h5 class="pb-s">Descricpión</h5>
          <p class="m-0">¿Listo para una experiencia musical inolvidable? Los Red Hot Chili Peppers llegan con su icónico estilo y sus éxitos atemporales que han marcado generaciones. Desde "Under the Bridge" hasta "Californication", prepárate para vibrar con la magia de una de las bandas más influyentes de la historia del rock. </p> 
          <p class="m-0">¡La cuenta regresiva ha comenzado! Únete a nosotros el 19 de noviembre en el Movistar Arena y sumérgete en un espectáculo enérgico, lleno de pasión y la esencia única que solo los Chili Peppers pueden ofrecer.</p>
      </f7-block>
      <f7-block style="border-bottom:1px solid #DADADA;" class="m-0 pt-l pb-l p-s">
          <h5 class="pb-s">DURACION</h5>
          <div class="row  middle-xs gap-s">
            <i class="icon f7-icons card-icon color-black">goforward</i>
            <p class="m-0">19/10/2023 21:00PM - 20/10/2023 00:00AM</p>
          </div>
        
      </f7-block>
      <f7-block style="border-bottom:1px solid #DADADA;" class="m-0 pt-l pb-l p-s">
        <h5 class="pb-s">CATEGORIAS</h5>
        <div class=" row middle-xs gap-s">
          <f7-button fill raised Distancia="#distancia" class="btn-small">#Conciertos</f7-button>
          <f7-button fill raised Fecha="#fecha" class="btn-small">#AireLibre</f7-button>
          <f7-button fill raised Categoria="#categoria" class="btn-small">#Musica</f7-button>
        </div>
      </f7-block>
      <f7-block style="border-bottom:1px solid #DADADA;" class="m-0 pt-l pb-l p-s">
        <h5 class="pb-s">HASTAGS</h5>
        <div class=" row middle-xs gap-s">
          <f7-button fill raised Distancia="#distancia" class="btn-small">#RHCPEnVivo</f7-button>
          <f7-button fill raised Fecha="#fecha" class="btn-small">#Fiesta</f7-button>
          <f7-button fill raised Categoria="#categoria" class="btn-small">#Baile</f7-button>
        </div>
      </f7-block>
      <f7-block style="border-bottom:1px solid #DADADA;" class="m-0 pt-l pb-l p-s">
        <h5 class="pb-s">INVITA A TUS AMIGOS A ESTE EVNTO</h5>
        <div class=" row middle-xs gap-s middle-xs between-xs">
          <div class=" row middle-xs gap-s">
          <i style="color:var(--f7-theme-color)" class="icon f7-icons card-icon">person_badge_plus_fill</i>
              <div>
                <p class="m-0" style="color: var(--f7-theme-color);">¡Vamoh con tus amigos!</p>
                <p class="m-0">Empieza un chat para coordinar</p> 
              </div>
          </div>
          <i class="icon f7-icons card-icon">chevron_right</i>
        </div>

      </f7-block>
      <f7-block style="border-bottom:1px solid #DADADA;" class="m-0 pt-l pb-l p-s">
        <h5 class="pb-s">¿QUÍENES VAN?</h5>
        <div class=" row middle-xs gap-s middle-xs between-xs">
          <div class="row middle-xs gap-nos">
          <p class="m-0">+3</p>
          <i class="icon f7-icons card-icon color-green">checkmark_alt_circle_fill</i>
          </div>
          <i class="icon f7-icons card-icon">chevron_right</i>
        </div>
      </f7-block>
      <f7-block-title class="row between-xs middle-xs">
      <p style="font-weight: 400;">Publicidad</p> 
      </f7-block-title>
      <card-publicidad></card-publicidad>

    <f7-block-title class="row between-xs middle-xs">
    
      <a href="#">Ver más</a></f7-block-title>
    <panorama-carrousel></panorama-carrousel>
    </f7-block>
  </f7-page>
</template>
