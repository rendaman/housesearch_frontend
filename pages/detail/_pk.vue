<template>
    <div class="makerdetail mx-auto">
        <MakerBrand v-bind:maker="maker" />
        <NavNavBarOnDetail v-bind:maker="maker" class="fixed" />
        <RateHeader v-bind:maker="maker" />
        <!--<table border="1">
            <tr>
                <th>平均費用</th>
                <td>{{ parseFloat(maker.get_expense_avg).toFixed(1) }}万円</td>
            </tr>
            <tr>
                <th>平均坪数(㎡)</th>
                <td>{{ parseFloat(maker.get_landarea_avg).toFixed(1) }}坪 （{{ parseFloat(maker.get_landarea_avg*3.30579).toFixed(1) }}㎡）</td>
            </tr>
        </table>-->
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
    async asyncData({ $axios, params }) {
        const url = 'api/v1/makers/' + `${params.pk}`  + '/'
        const maker = await $axios.$get(url)
        return {maker}
    },
    }
</script>