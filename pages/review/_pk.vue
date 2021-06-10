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
    async asyncData({ $axios, params }) {
        const url = 'api/v1/reviews/?maker_name=' + `${params.pk}`
        const reviews = await $axios.$get(url)
        const url2 = 'api/v1/makers/' + `${params.pk}`  + '/'
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