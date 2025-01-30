<template>

  <f7-card class="p-xxxs m-0" style="border-radius: var(--spaces-xs); width:140px; box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);">
    <f7-card-header
      valign="bottom"
      class="b-0"
      style="border-radius:var(--spaces-xs); height:98px; color:var(--f7-white); background-size: cover; background-image: url(/assets/img/event-image.jpeg)"
      >
      <i style="position:absolute; right:var(--spaces-xxs); top:var(--spaces-xxs);" class="icon f7-icons card-icon color-white">heart_fill</i>
      </f7-card-header>
    <f7-card-content class="m-0 pt-xs pb-xs">
      <h4>Concierto de Baterista</h4>
      <div class="row top-xs gap-xxs">
        <p class="hastag-blue">#Evento</p><p class="hastag-blue">#Concierto</p>
      </div>
      <div class="row between-xs middle-xs ">
        <div class="row between-xs middle-xs "> 
          <div class="circle-image"><img src="/assets/img/logo-ambar.png" alt=""></div>
          <h5>Club Ambar</h5>
        </div>
        <div class="row between-xs middle-xs ">
          <i class="icon f7-icons card-icon color-yellow">star_fill</i>
          <h5>5,5</h5>
        </div>
      </div>
      <div class="row between-xs middle-xs ">
        <div class="row between-xs middle-xs "> 
          <i class="icon f7-icons card-icon">placemark_fill</i>
          <h5>2 Km</h5>
        </div>
        <div class="row between-xs middle-xs ">
          <i class="icon f7-icons card-icon">calendar</i>
          <h5>09/09</h5>
        </div>
      </div>
      <p class="price poppins-semibold">700 EXP</p>
    </f7-card-content>
  </f7-card>

</template>

<script>
export default {
  name: 'PanoramaCard'
};
</script>
