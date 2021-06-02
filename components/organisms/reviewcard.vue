<template>
    <div class="reviewcard">
        <div class="">
            <i class="bi bi-person-fill"></i>
            <span class="reviewcard-author">投稿者：{{review.author}}さん</span>
        </div>
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
            review: '',
        }
    },
    props: ['review'],
}
</script>

