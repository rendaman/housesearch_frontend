<template>
    <div class="review">
        <MakerBrand v-bind:maker="maker" />
        <NavNavBarOnDetail v-bind:maker="maker" class="fixed" />
        <MakerTopSentence v-bind:maker="maker" />
        <div v-for="review in reviews" :key="review.pk">
            <div class="card mb-3 mx-auto">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-text">題名：{{review.title}}</p>
                            <p class="card-text">投稿者：{{review.author}}さん</p>
                            <p class="card-text">現在：{{review.status}}</p>
                            <p class="card-text">総合評価：{{review.avgrate}}</p>
                            <p class="card-text">費用：{{review.costrate}}</p>
                            <p class="card-text">{{review.costcomment}}</p>
                            <p class="card-text">デザイン：{{review.designrate}}</p>
                            <p class="card-text">{{review.designcomment}}</p>
                            <p class="card-text">間取り：{{review.layoutrate}}</p>
                            <p class="card-text">{{review.layoutcomment}}</p>
                            <p class="card-text">住宅の性能：{{review.specrate}}</p>
                            <p class="card-text">{{review.speccomment}}</p>
                            <p class="card-text">付帯設備：{{review.attachcomment}}</p>
                            <p class="card-text">{{review.attachrate}}</p>
                            <p class="card-text">保証：{{review.guaranteerate}}</p>
                            <p class="card-text">{{review.guaranteecomment}}</p>
                            <p class="card-text">担当営業：{{review.salesrate}}</p>
                            <p class="card-text">{{review.salescomment}}</p>
              <!--
              {% if item.author == user.username%}
              <form method="POST" action="{% url 'deletereview' object.pk %}">{% csrf_token %}
                <button class="btn btn-outline-primary" type="submit">削除する</button>
              </form>
              {% endif %}-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MakerBrand from '~/components/molecules/maker-brand.vue'
import NavNavBarOnDetail from '~/components/molecules/nav-navbarondetail'
import MakerTopSentence from '~/components/atoms/maker-topsentence'
export default {
    components: {
        MakerBrand, NavNavBarOnDetail, MakerTopSentence,
    },
    async asyncData({ $axios, params }) {
        const url = 'api/reviews/?maker_name=' + `${params.pk}`
        const reviews = await $axios.$get(url)
        const url2 = 'api/makers/' + `${params.pk}`  + '/'
        const maker = await $axios.$get(url2)
        return {reviews,maker}
    },
}
</script>

<style lang="scss">
.fixed {
    position: -webkit-sticky;
    position: sticky;
    top:0;
}
</style>