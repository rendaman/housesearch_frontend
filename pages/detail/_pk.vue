<template>
  <div class="makerdetail">
    <div class="mx-auto">
      <div class="maker-card p-2">
        <div class="row">
          <div class="col-4 makerdetail-top-image">
            <img v-bind:src="maker.image_url" v-bind:alt="maker.name" v-bind:title="maker.name" class="card-img-top" >
          </div>
          <div class="col-8 makerdetail-title">
            <h1>{{maker.name}}</h1>
          </div>
          <MakerBrand
            :maker="maker"
          >
          <MakerBrand/>
        </div>
        <div class="row">
          <div class="card-body">
            <p class="card-text review-p" v-html="maker.ratetostr"></p>
            <p class="card-text review-p">{{ parseFloat(maker.get_rateavg).toFixed(1) }} | 口コミ：{{ maker.get_review_count }}件</p><br>
            <p class="card-text review-p">平均費用：{{ parseFloat(maker.get_expense_avg).toFixed(1) }}万円 | 費用明細：{{ maker.get_expense_count }}件</p><br>
            <p class="card-text review-p">平均坪数：{{ parseFloat(maker.get_landarea_avg).toFixed(1) }}坪</p>
            <p> {{maker.description}} </p>
          </div>
        </div>
      </div>
    </div>
    <div class="revnav" >
        <div class="text-center py-3">
          <nuxt-link :to="`/review/${maker.name_eng}`" class="col-3 mx-3"><i class="bi bi-chat-dots-fill"></i>口コミ一覧</nuxt-link>
          <a class="col-3 mx-3" href="{% url 'expense' maker.pk %}"><i class="bi bi-cash-stack"></i>費用明細一覧</a>
        </div>
        <div class="text-center py-3">
          <a class="col-3 mx-2" href="{% url 'postreview' maker.pk %}"><button class="w-30 btn btn-primary" >口コミを投稿する</button></a>
          <a class="col-3 mx-2" href="{% url 'postexpense' maker.pk %}"><button class="w-30 btn btn-primary"> 費用明細を投稿する</button></a>
        </div>
    </div>
  </div>
</template>

<script>
import MakerBrand from '~/components/molecules/maker-brand.vue'
export default {
  data () {
    return {
      maker: ''
    }
  },
  components: {
    MakerBrand: MakerBrand,
  },
  async asyncData({ $axios, params }) {
    const url = 'api/makers/' + `${params.pk}`  + '/'
    const maker = await $axios.$get(url)
    return {maker}
  },
}
</script>

<style lang="scss" scoped>
.revnav {
    border-bottom: solid 1px #BCBCBC;
}
</style>