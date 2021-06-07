<template>
    <div class="revstar">
        <star-rating v-model="rate"
                            :increment="1"
                            :max-rating="5"
                            inactive-color="#ccc"
                            active-color="#feca2f"
                            :show-rating=true
                            :star-size="25"
        />
    </div>
</template>

<style lang="scss">
@import "@/assets/css/mixin.scss";
.vue-star-rating {
    display: inline!important;
    vertical-align: text-bottom;
}
</style>

<script>
export default {
    data () {
        return {
            rate: 0,
        }
    }
}
</script>

