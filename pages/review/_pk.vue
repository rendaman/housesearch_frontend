<template>
    <div class="review">
        <MakerBrand :maker="maker" />
        <NavNavBarOnDetail :maker="maker" class="fixed" />
        <RateHeader :maker="maker" />
        <div v-for="review in reviews" :key="review.pk">
            <ReviewCard :review="review" />
        </div>
    </div>
</template>

<script>
import MakerBrand from '~/components/molecules/maker-brand.vue'
import NavNavBarOnDetail from '~/components/molecules/nav-navbarondetail'
import RateHeader from '~/components/organisms/rateheader'
import ReviewCard from '~/components/organisms/reviewcard'
export default {
    data () {
        return {
            maker: {
                get_rateavg: 0,
            },
        }
    },
    components: {
        MakerBrand, NavNavBarOnDetail, RateHeader, ReviewCard
    },
    async asyncData({ $axios, params, $REVIEW_URL_FILTERED_BY_MAKER, $MAKER_URL }) {
        const reviews = await $axios.$get($REVIEW_URL_FILTERED_BY_MAKER + `${params.pk}`)
        const maker = await $axios.$get($MAKER_URL + `${params.pk}`  + '/')
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