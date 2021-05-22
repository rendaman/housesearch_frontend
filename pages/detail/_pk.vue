<template>
    <div class="makerdetail mx-auto">
        <MakerBrand v-bind:maker="maker" />
        <NavNavBarOnDetail v-bind:maker="maker" class="fixed" />
        <MakerTopSentence v-bind:maker="maker" />
        <table border="1">
            <tr>
                <th>費用</th>
                <th>間取り</th>
                <th>デザイン</th>
                <th>住居の性能</th>
                <th>付帯設備</th>
                <th>保証</th>
                <th>営業</th>
            </tr>
            <tr>
                <td>{{ parseFloat(maker.get_costavg).toFixed(2) }}</td>
                <td>{{ parseFloat(maker.get_layoutavg).toFixed(2) }}</td>
                <td>{{ parseFloat(maker.get_designavg).toFixed(2) }}</td>
                <td>{{ parseFloat(maker.get_specavg).toFixed(2) }}</td>
                <td>{{ parseFloat(maker.get_attachavg).toFixed(2) }}</td>
                <td>{{ parseFloat(maker.get_guaranteeavg).toFixed(2) }}</td>
                <td>{{ parseFloat(maker.get_salesavg).toFixed(2) }}</td>
            </tr>
        </table>
        <table border="1">
            <tr>
                <th>平均費用</th>
                <td>{{ parseFloat(maker.get_expense_avg).toFixed(1) }}万円</td>
            </tr>
            <tr>
                <th>平均坪数(㎡)</th>
                <td>{{ parseFloat(maker.get_landarea_avg).toFixed(1) }}坪 （{{ parseFloat(maker.get_landarea_avg*3.30579).toFixed(1) }}㎡）</td>
            </tr>
        </table>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
</template>

<style lang="scss" scoped>
.fixed {
    position: -webkit-sticky;
    position: sticky;
    top:0;
}
</style>

<script>
import MakerBrand from '~/components/molecules/maker-brand.vue'
import NavNavBarOnDetail from '~/components/molecules/nav-navbarondetail'
import MakerTopSentence from '~/components/atoms/maker-topsentence'
export default {
    components: {
        MakerBrand, NavNavBarOnDetail, MakerTopSentence,
    },
    data () {
        return {
            maker: '',
        }
    },
    async asyncData({ $axios, params }) {
        const url = 'api/makers/' + `${params.pk}`  + '/'
        const maker = await $axios.$get(url)
        return {maker}
    },
    }
</script>