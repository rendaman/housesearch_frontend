<template>
    <div class="totalrate">
        <div class="totalrate-content text-center py-4 mx-auto row">
            <div class="totalrate-content-title pb-3">総合評価<span class="totalrate-content-title-reviews">({{ maker.get_review_count }}件)</span></div>
            <p class="totalrate-content-value">{{ parseFloat(maker.get_rateavg).toFixed(2) }}</p>
            <div class="totalrate-content-star">
                <client-only>
                    <star-rating v-model="maker.get_rateavg"
                                        :increment="0.5"
                                        :max-rating="5"
                                        inactive-color="#ccc"
                                        active-color="#feca2f"
                                        :read-only=true
                                        :show-rating=false
                                        :star-size="30"
                    />
                </client-only>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/css/mixin.scss";
.totalrate {
    &-content {
        &-title {
            font-size: 17px;
            &-reviews {
                display: none;
                @include sp {
                    display: inline;
                }
            }
        }
        &-value {
            font-size: 25px;
        }
    }
}
.vue-star-rating {
    display: block!important;
    margin-left: auto;
    margin-right: auto;
}
</style>

<script>
export default {
    props: ['maker'],
}
</script>

