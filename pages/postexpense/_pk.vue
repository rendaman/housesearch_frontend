<template>
    <div class="postexpense">
        <MakerBrand :maker="maker" />
        <NavNavBarOnDetail :maker="maker" class="fixed" />
        <ExpPostJoin :maker="maker" :pk="isposted.ExpPosted" :expense="expense" class="mx-auto py-4" />
    </div>
</template>

<script>
import MakerBrand from '~/components/molecules/maker-brand.vue'
import NavNavBarOnDetail from '~/components/molecules/nav-navbarondetail'
import ExpPostJoin from '~/components/organisms/exppostjoin'
export default {
    middleware: 'auth',
    components: {
        MakerBrand, NavNavBarOnDetail, ExpPostJoin
    },
    async asyncData({ $axios, params, $EXPENSE_URL, $MAKER_URL, $ISPOST_URL }) {
        var expense
        const maker = await $axios.$get($MAKER_URL + `${params.pk}`  + '/')
        const isposted = await $axios.$get($ISPOST_URL + maker.name_eng + '/')
        if (isposted.RevPosted != ""){
            expense = await $axios.$get($EXPENSE_URL + isposted.ExpPosted + '/')
        }
        return {expense, maker, isposted}
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