<template>
    <div class="review">
        <MakerBrand v-bind:maker="maker" />
        <NavNavBarOnDetail v-bind:maker="maker" class="fixed" />
        <div v-for="expense in expenses" :key="expense.pk">
            <div v-if="!expense.hid" class="mb-3 mx-3">
                <div class="row g-0">
                    <div class="col-md-8 col-12">
                        <div class="card-body">
                            <p class="card-text">現在：{{expense.status}}</p>
                            <p class="card-text">投稿者：{{expense.author}}さん</p>
                            <p class="card-text">投稿日：{{expense.create_date}}</p>
                            <p class="card-text">費用：{{expense.cost}}万円</p>
                            <p class="card-text">坪数：{{expense.landarea}}坪</p>
                            <p class="card-text">グレード：{{expense.gradecomment}}</p>
                            <p class="card-text">値上がりポイント：{{expense.costupcomment}}</p>
                            <p class="card-text">値下がりポイント：{{expense.costdowncomment}}</p>
                            <img v-if="expense.image_url!=''" :src="expense.image_url" :alt="maker.name" :title="maker.name">
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
export default {
    components: {
        MakerBrand, NavNavBarOnDetail,
    },
    async asyncData({ $axios, params, $MAKER_URL, $EXPENSE_URL_FILTERED_BY_MAKER }) {
        const expenses = await $axios.$get($EXPENSE_URL_FILTERED_BY_MAKER + `${params.pk}`)
        const maker = await $axios.$get($MAKER_URL + `${params.pk}`  + '/')
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