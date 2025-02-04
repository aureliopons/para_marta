<template>

  <f7-card class="p-0 pt-s pl-s pr-0 m-0 row" style="flex-wrap: nowrap;">
    <f7-card-header
      valign="bottom"
      class="b-0"
      style="width: 30%;  border-radius:  var(--spaces-xs); background-size: cover; background-image: url(/assets/img/party.jpeg)"
      >
      </f7-card-header>
    <f7-card-content class="p-m row between-xs middle-xs" style="width: 70%;">
      <div class="p-0">
        <p class="blue m-0 pb-s">sab, ene 14 ° 11:00 PM GMT - 03:00</p>
        <h3>Sábados Infinitos</h3>
        <div class="row gap-s "> 
         <i style="font-size: var(--spaces-xl);" class="icon f7-icons card-icon ">arrowshape_turn_up_right_fill</i>
          <h5>2,500 Compartidas</h5>
        </div>
      </div>
      <i class="icon f7-icons card-icon color-red">heart_fill</i>
     </f7-card-content>
  </f7-card>
  <f7-card-footer class="m-0 p-s row start-xs gap-m">
    <f7-button fill raised class="btn-smal gap-s"><i class="icon f7-icons card-icon color-white">hand_thumbsup_fill </i> 4k</f7-button>
    <f7-button fill raised class="btn-smal gap-s"><i class="icon f7-icons card-icon color-white">heart_fill </i> 7k</f7-button>
  </f7-card-footer>

</template>

<script>
export default {
  name: 'CardEventPerfil'
};
</script>
