<template>


<f7-card style=" color:white; border-radius:var(--spaces-xs); background-size: cover; background-image: url(/assets/img/rumba-neon.png)">
    <f7-card-header valign="bottom" class="p-0" >
      <div class="row">
        <p class="discount">50% Descuento</p>
        <i style="position:absolute; right:var(--spaces-s); top:var(--spaces-m); font-size: var(--spaces-xl);" class="icon f7-icons card-icon color-white">heart_fill</i>
      </div>
    </f7-card-header>
    <f7-card-content class="pt-m pb-m pr-s pl-s m-0 mt-xxxl">
      <div class="row  between-xs middle-xs">
        <h3 class="m-0">Rumba Neon</h3> 
        <p style="color: #1DFF85; font-size: 16px; font-weight:700; margin: 0px;">700 EXP</p>
      </div>
      <div class="row between-xs">
        <div class="row gap-xxs middle-xs"> 
          <div class="circle-image"><img src="/assets/img/bar-serenity.png" alt=""></div>
          <h4>Bar Serenity</h4>
        </div>
          <div class="row gap-xxs middle-xs"> 
          <i class="icon f7-icons card-icon color-yellow">star_fill</i>
          <h4>5,5</h4></div>
        <div class="row gap-xxs middle-xs">
          <i style="font-size: var(--spaces-m);" class="icon f7-icons card-icon">calendar</i>
          <h4 >31/01</h4>
        </div>
        <div class="row gap-xxs middle-xs"> 
          <i style="font-size: var(--spaces-m);" class="icon f7-icons card-icon">placemark_fill</i>
          <h4>2 Km</h4>
        </div>
      </div>
    </f7-card-content>
  </f7-card>

</template>

<script>
export default {
  name: 'PanoramaCardFull'
};
</script>
