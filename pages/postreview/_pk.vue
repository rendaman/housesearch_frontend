<template>
    <div class="postreview">
        <MakerBrand :maker="maker" />
        <NavNavBarOnDetail :maker="maker" class="fixed" />
        <RevPostJoin :maker="maker" class="mx-auto py-4" />
    </div>
</template>

<script>
import MakerBrand from '~/components/molecules/maker-brand.vue'
import NavNavBarOnDetail from '~/components/molecules/nav-navbarondetail'
import RevPostJoin from '~/components/organisms/revpostjoin'
export default {
    middleware: 'auth',
    data () {
        return {
            maker: {
                get_rateavg: 0,
            },
        }
    },
    components: {
        MakerBrand, NavNavBarOnDetail, RevPostJoin
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