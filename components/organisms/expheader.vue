<template>
    <div class="expheader">
        <p class="expheader-review mx-5">見積り({{ maker.get_review_count }}件)</p>
        <div class="expheader-row row">
            <div class="col-12 row expheader-row-reviewpoint">
                <div class="col-6">
                    費用の平均
                </div>
                <div class="col-6">
                    坪数の平均
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.expheader{
    overflow: hidden;
    &-row {
        &-reviewpoint {
            @include tab {
                margin-right: 0;
                margin-left: 0;
            }           
        }
    }
    &-review {
        padding-top: 20px;
        font-weight: 700;
        font-size: 20px;
        @include sp {
            display: none;
        }
    }
}
</style>

<script>
import TotalRate from '~/components/molecules/totalrate'
import ReviewPoint from '~/components/atoms/review-point'
export default {
    components: {
        TotalRate, ReviewPoint
    },
    props: ['maker'],
}
</script>

