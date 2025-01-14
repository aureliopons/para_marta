<template>
  

    <f7-block>
      <swiper :slides-per-view="1.2" :space-between="10" pagination>
        <swiper-slide><panorama-card> </panorama-card></swiper-slide>
        <swiper-slide><panorama-card> </panorama-card></swiper-slide>
        <swiper-slide><panorama-card> </panorama-card></swiper-slide>
        <swiper-slide><panorama-card> </panorama-card></swiper-slide>
      </swiper>
    </f7-block>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

