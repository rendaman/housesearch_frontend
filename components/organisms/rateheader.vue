<template>
    <div class="rateheader">
        <p class="rateheader-review mx-5">クチコミ({{ maker.get_review_count }}件)</p>
        <div class="rateheader-row row">
            <div class="col-12 col-lg-3">
                <TotalRate v-bind:maker="maker" />
            </div>
            <div class="col-12 col-lg-9 row rateheader-row-reviewpoint">
                <div class="col-6">
                    <ReviewPoint>
                        <template v-slot:what>
                            費用
                        </template>
                        <template v-slot:how>
                            {{ parseFloat(maker.get_costavg).toFixed(2) }}
                        </template>
                    </ReviewPoint>
                    <ReviewPoint>
                        <template v-slot:what>
                            デザイン
                        </template>
                        <template v-slot:how>
                            {{ parseFloat(maker.get_designavg).toFixed(2) }}
                        </template>
                    </ReviewPoint>
                    <ReviewPoint>
                        <template v-slot:what>
                            間取り
                        </template>
                        <template v-slot:how>
                            {{ parseFloat(maker.get_layoutavg).toFixed(2) }}
                        </template>
                    </ReviewPoint>
                </div>
                <div class="col-6">
                    <ReviewPoint>
                        <template v-slot:what>
                            性能
                        </template>
                        <template v-slot:how>
                            {{ parseFloat(maker.get_specavg).toFixed(2) }}
                        </template>
                    </ReviewPoint>
                    <ReviewPoint>
                        <template v-slot:what>
                            保証
                        </template>
                        <template v-slot:how>
                            {{ parseFloat(maker.get_guaranteeavg).toFixed(2) }}
                        </template>
                    </ReviewPoint>
                    <ReviewPoint>
                        <template v-slot:what>
                            営業
                        </template>
                        <template v-slot:how>
                            {{ parseFloat(maker.get_salesavg).toFixed(2) }}
                        </template>
                    </ReviewPoint>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.rateheader{
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

