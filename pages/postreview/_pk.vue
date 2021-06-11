<template>
    <div class="postreview">
        <MakerBrand :maker="maker" />
        <NavNavBarOnDetail :maker="maker" class="fixed" />
        <RevPostJoin :maker="maker" :isposted="isposted" class="mx-auto py-4" />
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
    async asyncData({ $axios, params, $REVIEW_URL_FILTERED_BY_MAKER, $MAKER_URL, $ISPOST_URL }) {
        const reviews = await $axios.$get($REVIEW_URL_FILTERED_BY_MAKER + `${params.pk}`)
        const maker = await $axios.$get($MAKER_URL + `${params.pk}`  + '/')
        const isposted = await $axios.$get($ISPOST_URL + maker.name_eng + '/')
        return {reviews, maker, isposted}
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