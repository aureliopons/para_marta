<template>
    <f7-block class="m-0 p-0">
      <swiper-container :pagination="true" class="demo-swiper-multiple" :space-between="50">
        <swiper-slide><panorama-card-full-evento></panorama-card-full-evento></swiper-slide>
        <swiper-slide><panorama-card-full-evento></panorama-card-full-evento></swiper-slide>
        <swiper-slide><panorama-card-full-evento></panorama-card-full-evento></swiper-slide>
        <swiper-slide><panorama-card-full-evento></panorama-card-full-evento></swiper-slide>
        <swiper-slide><panorama-card-full-evento></panorama-card-full-evento></swiper-slide>
        <swiper-slide><panorama-card-full-evento></panorama-card-full-evento></swiper-slide>
        <swiper-slide><panorama-card-full-evento></panorama-card-full-evento></swiper-slide>
        <swiper-slide><panorama-card-full-evento></panorama-card-full-evento></swiper-slide>
        <swiper-slide><panorama-card-full-evento></panorama-card-full-evento></swiper-slide>
        <swiper-slide><panorama-card-full-evento></panorama-card-full-evento>0</swiper-slide>
      </swiper-container>
    </f7-block>
  </template>
  <script>
  import { f7Navbar, f7Page } from 'framework7-vue';
  
  export default {
    components: {
      f7Navbar,
      f7Page,
    },
  };
  </script>