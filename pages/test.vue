<template>
  <div>
    <VueSlickCarousel v-bind="settings">
        <img src='@/assets/images/carousel1.jpg' alt="HOUSE SEACRH" title="HOUSE SEACRH" class="img-fluid mx-auto">
        <img src='@/assets/images/carousel1.jpg' alt="HOUSE SEACRH" title="HOUSE SEACRH" class="img-fluid mx-auto">
        <img src='@/assets/images/carousel1.jpg' alt="HOUSE SEACRH" title="HOUSE SEACRH" class="img-fluid mx-auto">
        <img src='@/assets/images/carousel1.jpg' alt="HOUSE SEACRH" title="HOUSE SEACRH" class="img-fluid mx-auto">
        <img src='@/assets/images/carousel1.jpg' alt="HOUSE SEACRH" title="HOUSE SEACRH" class="img-fluid mx-auto">
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
            "dots": true,
            "infinite": true,
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "swipeToSlide": true,
            "autoplay": true,
            "speed": 1000,
            "autoplaySpeed": 5000,
            "pauseOnFocus": true,
        },
      }
    },
  }
</script>
<style>
    img {
        -webkit-user-drag: none;
        height:400px;
        width:800px
    }
</style>