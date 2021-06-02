<template>
    <div class="totalrate">
        <div class="totalrate-content text-center py-4 mx-auto row">
            <p class="totalrate-content-title">総合評価</p>
            <p class="totalrate-content-value">{{ parseFloat(maker.get_rateavg).toFixed(2) }}</p>
            <div class="totalrate-content-star">
                <client-only>
                    <VueStarRating v-model="maker.get_rateavg"
                                    v-bind:increment="0.5"
                                    v-bind:max-rating="5"
                                    inactive-color="#ccc"
                                    active-color="#feca2f"
                                    v-bind:read-only=true
                                    v-bind:show-rating=false
                                    v-bind:star-size="30"
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
import VueStarRating from 'vue-star-rating'
export default {
    components: {VueStarRating},
    props: ['maker'],
}
</script>

