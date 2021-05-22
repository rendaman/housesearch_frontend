<template>
    <div class="makerdetailtop">
        <MakerBrand v-bind:maker="maker" />
        <NavNavBarOnDetail v-bind:maker="maker" class="fixed" />
        <MakerTopSentence v-bind:maker="maker" />
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
    props: ['maker'],
}
</script>

