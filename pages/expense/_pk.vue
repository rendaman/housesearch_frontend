<template>
    <div class="expense">
        <MakerBrand v-bind:maker="maker" />
        <NavNavBarOnDetail v-bind:maker="maker" class="fixed" />
        <div v-for="expense in expenses" :key="expense.pk" class="mx-3">
            <div v-if="!expense.hid">
                <ExpCard :expense="expense" />
            </div>
        </div>
    </div>
</template>

<script>
import MakerBrand from '~/components/molecules/maker-brand.vue'
import NavNavBarOnDetail from '~/components/molecules/nav-navbarondetail'
import ExpCard from '~/components/organisms/expcard'
export default {
    components: {
        MakerBrand, NavNavBarOnDetail, ExpCard,
    },
    async asyncData({ $axios, params, $MAKER_URL, $EXPENSE_URL_FILTERED_BY_MAKER }) {
        const expenses = await $axios.$get($EXPENSE_URL_FILTERED_BY_MAKER + `${params.pk}`)
        const maker = await $axios.$get($MAKER_URL + `${params.pk}`  + '/')
        return {expenses,maker}
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