<template>
    <div class="index">
        <div class="carousel-container">
            <vue-slick-carousel v-bind="settings">
                <img src='@/assets/images/carousel1.jpg' alt="HOUSE SEACRH" title="HOUSE SEACRH">
                <img src='@/assets/images/carousel2.jpg' alt="HOUSE SEACRH" title="HOUSE SEACRH">
                <img src='@/assets/images/carousel3.jpg' alt="HOUSE SEACRH" title="HOUSE SEACRH">
                <img src='@/assets/images/carousel4.jpg' alt="HOUSE SEACRH" title="HOUSE SEACRH">
                <img src='@/assets/images/carousel5.jpg' alt="HOUSE SEACRH" title="HOUSE SEACRH">
            </vue-slick-carousel>
        </div>
        <div class="text-center top-message">
            <div class="my-5">
                <h4>住宅メーカーのこだわりや特徴</h4>
            </div>
            <div class="mx-auto my-5 top-message-subtitle">
                <p>こだわりや特徴を見比べて、最適な依頼先を見つけましょう。</p>
            </div>
        </div>
        <div id="app">
            <div class="pt-4">
                <div class="col-10 col-md-8 col-lg-6 mx-auto">
                    <input type="text" v-model="keyword" class="searchbox" placeholder="例）メーカー名など">
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-0 col-md-10 mx-auto py-3">
                <div v-for="maker in filteredMakers" :key="maker.pk">
                    <div class="card-container">
                        <div class="mx-auto px-4 col card-col">
                            <nuxt-link :to="`/detail/${maker.name_eng}`" class="my-3">
                                <div class="maker-card p-2">
                                    <div class="row">
                                        <div class="col-5 maker-card-image">
                                            <img v-bind:src="maker.image_url" v-bind:alt="maker.name" v-bind:title="maker.name" class="maker-card-image-top" >
                                        </div>
                                        <div class="col-7 d-flex align-items-center">
                                            <p class="card-title ps-3">{{maker.name}}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="card-body">
                                            <p class="card-text maker-card-review-p" v-html="maker.ratetostr"></p>
                                            <p class="card-text maker-card-review-p">{{ parseFloat(maker.get_rateavg).toFixed(2) }} | 口コミ：{{ maker.get_review_count }}件</p><br>
                                            <p class="card-text maker-card-review-p">平均費用：{{ parseFloat(maker.get_expense_avg).toFixed(1) }}万円 | 費用明細：{{ maker.get_expense_count }}件</p><br>
                                            <p class="card-text maker-card-review-p">平均坪数：{{ parseFloat(maker.get_landarea_avg).toFixed(1) }}坪</p>
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link>
                            <hr class="my-3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const url = 'api/makers/'
    const makers = await $axios.$get(url)
    return {makers}
  },
  data () {
    return {
      keyword: "",
      settings: {
        "arrow": false,
        "dots": false,
        "infinite": true,
        "slidesToScroll": 1,
        "swipeToSlide": true,
        "autoplay": true,
        "speed": 1000,
        "autoplaySpeed": 3000,
        "centerMode": true,
        "variableWidth": true,
      },
    }
  },
  computed: {
    filteredMakers () {
      let makers = []
      for(let i = 0; i < this.makers.length; i++) {
        let maker = this.makers[i];
        if(
          maker.name.indexOf(this.keyword) !== -1 ||
          maker.name_hira.indexOf(this.keyword) !== -1 ||
          maker.name_kata.indexOf(this.keyword) !== -1 ||
          maker.name_eng.indexOf(this.keyword) !== -1
        ) {
          makers.push(maker);
        }
      }
      return makers;
    }
  },
}
</script>

<style lang="scss" scoped>
.index {
  .carousel-container{
    overflow: hidden;
    img {
      -webkit-user-drag: none;
      height: 618px;
      width: 1000px;
    }
  }

  .top-message {
      border-top: solid 1px #BCBCBC;
      border-bottom: solid 1px #BCBCBC;
  }
  
    input.searchbox {
            width: 100%;
            padding-left: 2.5%;
            line-height: 2.0;
            border: #CCC 1px solid;
            border-radius: 25px;
            outline:0;
            transition: .3s;
            &:hover {
                filter:drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
            }
    }

  .card-col {
    max-width: 720px;
  }

  .maker-card {
    height: 200px;
    background-color: #fff;
    transition: 0.3s;
 
    &:hover {
      background-color: #f5f5f5;
    }

    &-image {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;

        img {
          height: auto;
          width: 100px;
        }
    }
      
    .card-body {
      padding-top: 10px;
      padding-bottom: 0;
    }

    .card-title {
      border-left: solid 1px #000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
      font-weight: bold; 
      font-size: 15px;
      line-height: 100%;
      height: 40px;
    }

    &-review-p {
      font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
      font-size: 14px;
      color: #000;
      font-weight: 300;
      line-height: 0.5;
      display: inline;
    }

    i {
      font-size: large; 
    }
  }



  /* iPad用 */
  @media screen and (max-width:1024px) {
      .maker-card {
          height: 200px;
          background-color: #f5f5f5;
      }
      p.card-text {
          font-size: 13px;
      }

      .card-body {
          padding-top: 0;
          padding-bottom: 0;
      }

      i.rateicon {
          font-size: medium; 
      }

      .maker-card-image {
          height: 90px;
      }

      img.card-img-top {
          height: auto;
          width: 100px;
      }

      .card-title {
          font-size: 13px;
      }

      .carousel-container{
        img {
          height: 309px;
          width: 500px;
          max-width: 500px
        }
      }
  }
  /* スマホ用 */
    @media screen and (max-width:480px) { 
        .top-message {
            &-subtitle{
                p {
                    font-size: 12px;
                }
            }
        }

      .carousel-container{
       img.slickitem {
        width: 100px;
        }
      }

      .maker-card {
          height: 190px;
          background-color: #f5f5f5;
      }
      p.card-text {
          font-size: 12px;
      }

      .card-body {
          padding-top: 0;
          padding-bottom: 0;
      }

      i.rateicon {
          font-size: medium; 
      }

      .maker-card-image {
          height: 90px;
      }

      img.maker-card-img-top {
          height: auto;
          width: 100px;
      }

      .card-title {
          font-size: 13px;
      }
      .carousel-container{
        img {
          height: 155px;
          width: 250px;
          max-width: 250px
        }
      }
  }
}
</style>