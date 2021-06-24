<template>
    <div class="makerdetail mx-auto">
        <MakerBrand v-bind:maker="maker" />
        <NavNavBarOnDetail v-bind:maker="maker" class="fixed" />
        <RateHeader v-bind:maker="maker" />
        <div class="br">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.fixed {
    position: -webkit-sticky;
    position: sticky;
    top:0;
}
.br {
    height: 1000px;
}
</style>

<script>
import MakerBrand from '~/components/molecules/maker-brand.vue'
import NavNavBarOnDetail from '~/components/molecules/nav-navbarondetail'
import RateHeader from '~/components/organisms/rateheader'
export default {
    components: {
        MakerBrand, NavNavBarOnDetail, RateHeader
    },
    data () {
        return {
            maker: '',
        }
    },
    async asyncData({ $axios, params, $MAKER_URL }) {
        const maker = await $axios.$get($MAKER_URL + `${params.pk}`  + '/')
        return {maker}
    },
    }
</script>