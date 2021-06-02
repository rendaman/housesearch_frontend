<template>
    <div class="reviewcard">
        <div class="">
            <span class="reviewcard-key"><slot name="cost"></slot></span>
            <span class="reviewcard-value"><slot name="cost"></slot></span>
            <span class="reviewcard-key"><slot name="cost"></slot></span>
            <span class="reviewcard-value"><slot name="cost"></slot></span>
            <span class="reviewcard-key"><slot name="cost"></slot></span>
            <span class="reviewcard-value"><slot name="cost"></slot></span>
            <span class="reviewcard-key"><slot name="cost"></slot></span>
            <span class="reviewcard-value"><slot name="cost"></slot></span>
        </div>
        <div class="">
            <span class="reviewcard-key"><slot name="cost"></slot></span>
            <span class="reviewcard-value"><slot name="cost"></slot></span>
            <span class="reviewcard-key"><slot name="cost"></slot></span>
            <span class="reviewcard-value"><slot name="cost"></slot></span>
            <span class="reviewcard-key"><slot name="cost"></slot></span>
            <span class="reviewcard-value"><slot name="cost"></slot></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.reviewcard {

}
</style>

<script>
export default {
    data () {
        return {
            maker: '',
        }
    },
    props: ['maker'],
}
</script>

