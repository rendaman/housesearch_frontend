<template>
    <div class="postexpcomp">
        <MakerBrand v-bind:maker="maker" />
        <NavNavBarOnDetail v-bind:maker="maker" class="fixed" />
        <div class="postexpcomp-main mx-3 text-center">
            ご投稿いただきありがとうございました。運営で確認後、費用明細を掲載させていただきます。
        </div>
    </div>
</template>
s
<script>
import MakerBrand from '~/components/molecules/maker-brand.vue'
import NavNavBarOnDetail from '~/components/molecules/nav-navbarondetail'
export default {
    components: {
        MakerBrand, NavNavBarOnDetail,
    },
    async asyncData({ $axios, params, $MAKER_URL}) {
        const maker = await $axios.$get($MAKER_URL + `${params.pk}`  + '/')
        return {maker}
    },
}
</script>

<style lang="scss">
.postexpcomp {
    &-main {
        padding-top: 5rem;
        padding-bottom: 5rem;
        color: #333;
        font-weight: 700;
        font-size: 20px;
    }
}
.fixed {
    position: -webkit-sticky;
    position: sticky;
    top:0;
}
</style>