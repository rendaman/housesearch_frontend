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
    async asyncData({ $axios, params }) {
        const url = 'api/v1/reviews/?maker_name=' + `${params.pk}`
        const reviews = await $axios.$get(url)
        const url2 = 'api/v1/makers/' + `${params.pk}`  + '/'
        const maker = await $axios.$get(url2)
        const url3 = 'api/isposted/'
        const isposted = await $axios.$get(url3)
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