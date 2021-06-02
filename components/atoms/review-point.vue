<template>
    <div class="review-point">
        <span class="review-point-what pull-left"><slot name="what"></slot></span>
        <span class="review-point-how pull-right"><slot name="how"></slot></span>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.review-point {
    color: #333;
    border-bottom: 1px dashed #ccc;
    padding-left: 20px;
    padding-right: 16px;
    padding-bottom: 10px;
    margin-top: 13px;
    margin-bottom: 20px;
    line-height: 1.6;
    &-what {
        font-size: 15px;
    }
    &-how{
        font-size: 16px;
        font-weight: 700;
        float: right;
    }
}
</style>

<script>
export default {
    props: ['maker'],
}
</script>

