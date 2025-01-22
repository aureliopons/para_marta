<template>

  <f7-card style="padding:2px; width:140px; margin:0px; d:fi">
    <f7-card-header
      valign="bottom"
      style="border:0px solid #fff;border-radius:5px; height:98px; color:#fff; background-size: cover; background-image: url(/assets/img/event-image.jpeg)">
      <i style="position:absolute; right:6px; top:6px;" class="icon f7-icons card-icon color-white">heart_fill</i>
      </f7-card-header>
    <f7-card-content style="margin: 0px; padding: 3px 0px;">
      <h3>Concierto de Baterista</h3>
      <div style="display: flex; flex-direction: row; gap:4px;">
        <p class="hastag">#Evento</p><p class="hastag">#Concierto</p>
      </div>
      <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
        <div style="display: flex; flex-direction: row; gap:2px; align-items: center;"> 
          <div class="circle-image"><img src="/assets/img/logo-ambar.png" alt=""></div>
          <h4>Club Ambar</h4>
        </div>
        <div style="display: flex; flex-direction: row; gap:2px; align-items: center;">
          <i class="icon f7-icons card-icon color-yellow">star_fill</i>
          <h4>5,5</h4>
        </div>
      </div>
      <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
        <div style="display: flex; flex-direction: row; gap:2px; align-items: center;"> 
          <i class="icon f7-icons card-icon">placemark_fill</i>
          <h4>2 Km</h4>
        </div>
        <div style="display: flex; flex-direction: row; gap:2px; align-items: center;">
          <i class="icon f7-icons card-icon">calendar</i>
          <h4>09/09</h4>
        </div>
      </div>
      <p class="price poppins-semibold">700 EXP</p>
    </f7-card-content>
  </f7-card>

</template>

<script>
export default {
  name: 'PanoramaCardHalf'
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
