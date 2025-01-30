<template>


<f7-card
onclick="window.open('https://www.ejemplo.com', '_blank');"  >
    <f7-card-content class="p-0">
      <video autoplay muted loop class="video-publi" src="assets/img/monster-publicidad.mp4"></video>
    </f7-card-content>
  </f7-card>

</template>

<script>
export default {
  name: 'CardPublicidad'
};
</script>
<style>
.video-publi{
  border-radius: var(--spaces-s);
  position: relative;
      width: 100%;
      overflow: hidden;
}
.video-publi video {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover; /* Hace que el video cubra todo el contenedor */
      transform: translate(-50%, -50%); /* Centra el video */
      z-index: -1;
    }
</style>