<template>
    <div class="review">
        <MakerBrand v-bind:maker="maker" />
        <NavNavBarOnDetail v-bind:maker="maker" class="fixed" />
        <MakerTopSentence v-bind:maker="maker" />
        <div v-for="expense in expenses" :key="expense.pk">
            <div class="mb-3">
                <div class="row g-0">
                    <div class="col-md-8 col-12">
                        <div class="card-body">
                            <p class="card-text">現在：{{expense.status}}</p>
                            <p class="card-text">投稿者：{{expense.author}}さん</p>
                            <p class="card-text">投稿日：{{expense.update_date}}</p>
                            <p class="card-text">費用：{{expense.cost}}万円</p>
                            <p class="card-text">坪数：{{expense.landarea}}坪</p>
                            <p class="card-text">グレード：{{expense.gradecomment}}</p>
                            <p class="card-text">値上がりポイント：{{expense.costupcomment}}</p>
                            <p class="card-text">値下がりポイント：{{expense.costdowncomment}}</p>
                            <img v-bind:src="expense.image_url" v-bind:alt="maker.name" v-bind:title="maker.name">
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
        const url = 'api/expense/?maker_name=' + `${params.pk}`
        const expenses = await $axios.$get(url)
        const url2 = 'api/makers/' + `${params.pk}`  + '/'
        const maker = await $axios.$get(url2)
        return {expenses,maker}
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