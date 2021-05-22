<template>
    <div class="maker-topsentence">
        <div class="maker-topsentence-topsentence text-center py-4 mx-auto">
            <span>総合評価</span>
            <span v-html="maker.ratetostr"></span>
            <span class="makerdetail-topsentence-mid pe-2">({{ maker.get_review_count }}件)</span>
            <span class="ps-2">平均:{{ parseFloat(maker.get_landarea_avg).toFixed(1) }}坪 / 平均:{{ parseFloat(maker.get_expense_avg).toFixed(1) }}万円 ({{ maker.get_expense_count }}件)</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.maker-topsentence{
    overflow: hidden;
    &-topsentence {
        font-size: 20px;
        &-mid {
            border-right: 1px solid #999
        }
    }
}

@include sp {
    .maker-topsentence{
        &-topsentence {
            font-size: 13px;
            &-mid {
                border-right: 0;
            }
        }
    }
}
</style>

<script>
export default {
    props: ['maker'],
}
</script>

