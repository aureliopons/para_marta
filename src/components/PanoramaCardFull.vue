<template>


<f7-card style="padding:0px; border:0px solid #fff; color:white; border-radius:5px; background-size: cover; background-image: url(/assets/img/rumba-neon.png)">
    <f7-card-header valign="bottom" style="padding:0px;" >
      <div style="display:flex; flex-direction: row; justify-content: space-between; align-items: center; ">
        <p class="discount">50% Descuento</p>
        <i style="position:absolute; right:6px; top:10px; font-size: 25px;" class="icon f7-icons card-icon color-white">heart_fill</i>
      </div>
    </f7-card-header>
    <f7-card-content style="margin: 60px 0px 0px 0px; padding: 12px 9px;">
      <div style="display: flex; flex-direction: row; justify-content: space-between; margin: 0px;">
        <h3 style="font-size: 14px; margin: 0px;">Rumba Neon</h3> 
        <p style="color: #1DFF85; font-size: 16px; font-weight:700; margin: 0px;">700 EXP</p>
      </div>
      <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
        <div style="display: flex; flex-direction: row; gap:2px; align-items: center;"> 
          <div class="circle-image"><img src="/assets/img/bar-serenity.png" alt=""></div>
          <h4 style="font-size:13px;">Bar Serenity</h4>
        </div>
          <div style="display: flex; flex-direction: row; gap:2px; align-items: center;"> 
          <i class="icon f7-icons card-icon color-yellow">star_fill</i>
          <h4>5,5</h4></div>
        <div style="display: flex; flex-direction: row; gap:2px; align-items: center;">
          <i style="font-size: 14px;" class="icon f7-icons card-icon">calendar</i>
          <h4 style="font-size: 14px;" >31/01</h4>
        </div>
        <div style="display: flex; flex-direction: row; gap:2px; align-items: center;"> 
          <i style="font-size: 14px;" class="icon f7-icons card-icon">placemark_fill</i>
          <h4 style="font-size: 14px;">2 Km</h4>
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

<style>
.hastag{
  background-color: #E0F0FF;
  border:1px solid var(--f7-secondary-blue);
  border-radius: 2px;
  font-size:10px;
  line-height: 15px;
  font-weight: 600;
  padding: 0px 5px;
  margin:0px;
  color: var(--f7-secondary-blue);
}
.circle-image{
  width: 16px; 
  height: 16px; 
  border-radius: 50%;
  overflow: hidden; 
}
.circle-image img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.card-icon{
  margin-top:-2px;
  font-size: 15px;
}
.color-yellow{
  color:#FFB930 !important;
  font-size: 10px;
}

.price{
  width: 100%;
  text-align: center;
  font-size:14px;
  font-weight: 900;
  background: linear-gradient(180deg, #B68E42, #F4B130);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0px;
}

</style>
