<template>

  <f7-card class="p-0 row" style="flex-wrap: nowrap; box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);">
    <f7-card-content class="m-0 p-0 pt-s pb-s" style="width: 60%; border-radius: 0px var(--spaces-xs) var(--spaces-xs) 0px;">
      <p class="discount-light">50% Descuento</p>
      <div class="pl-s pr-s pt-m">
      <h3>Gran Fiesta de Halloween</h3>
      <div class="row between-xs middle-xs pt-s pb-s">
        <div class="row between-xs middle-xs "> 
          <div class="circle-image"><img src="/assets/img/bar-serenity.png" alt=""></div>
          <h5>Bar Serenity</h5>
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
          <h5>031/01</h5>
        </div>
      </div>
      <p class="price poppins-semibold">700 EXP</p>
    </div>
    </f7-card-content>
    <f7-card-header
      valign="bottom"
      class="b-0"
      style="width: 40%;  border-radius: 0px var(--spaces-xs) var(--spaces-xs) 0px; background-size: cover; background-image: url(/assets/img/halloween.jpeg)"
      >
      <i style="position:absolute; right:var(--spaces-s); top:var(--spaces-s);" class="icon f7-icons card-icon color-white">heart_fill</i>
      </f7-card-header>
  </f7-card>

</template>

<script>
export default {
  name: 'PanoramaCardHalf'
};
</script>
