<template>
  

    <f7-block>
      <swiper :slides-per-view="2.2" :space-between="15" pagination>
        <swiper-slide style="max-width: 140px;"><panorama-card> </panorama-card></swiper-slide>
        <swiper-slide style="max-width: 140px;"><panorama-card> </panorama-card></swiper-slide>
        <swiper-slide style="max-width: 140px;"><panorama-card> </panorama-card></swiper-slide>
        <swiper-slide style="max-width: 140px;"><panorama-card> </panorama-card></swiper-slide>
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
<style>
.swiper-pagination{
  display: none;
}
.swiper-wrapper{
  height: 220px;
}
</style>

