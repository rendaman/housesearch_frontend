<template>
    <div class="postreview">
        <MakerBrand :maker="maker" />
        <NavNavBarOnDetail :maker="maker" class="fixed" />
        <RevPostJoin :maker="maker" :pk="isposted.RevPosted" :review="review" class="mx-auto py-4" />
    </div>
</template>

<script>
import MakerBrand from '~/components/molecules/maker-brand.vue'
import NavNavBarOnDetail from '~/components/molecules/nav-navbarondetail'
import RevPostJoin from '~/components/organisms/revpostjoin'
export default {
    middleware: 'auth',
    components: {
        MakerBrand, NavNavBarOnDetail, RevPostJoin
    },
    async asyncData({ $axios, params, $REVIEW_URL, $MAKER_URL, $ISPOST_URL }) {
        var review
        const maker = await $axios.$get($MAKER_URL + `${params.pk}`  + '/')
        const isposted = await $axios.$get($ISPOST_URL + maker.name_eng + '/')
        if (isposted.RevPosted != ""){
            review = await $axios.$get($REVIEW_URL + isposted.RevPosted + '/')
        }
        return {review, maker, isposted}
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