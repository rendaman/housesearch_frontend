<template>
    <div class="reviewcard mx-auto pt-4 pb-4">
        <div class="">
            <i class="bi bi-person-fill"></i>
            <span class="reviewcard-author">{{review.author}}さん</span>
            <star-rating v-model="review.avgrate"
                                :increment="0.5"
                                :max-rating="5"
                                inactive-color="#ccc"
                                active-color="#feca2f"
                                :read-only=true
                                :show-rating=false
                                :star-size="17"
            />
            <span class="reviewcard-rate">{{review.avgrate}}</span>
            <span class="reviewcard-status">{{review.status}}</span>
        </div>
        <div class="py-2">
            <span class="reviewcard-key">費用</span>
            <span class="reviewcard-value">{{ parseFloat(review.costrate).toFixed(1) }}</span>
            <span class="reviewcard-key">デザイン</span>
            <span class="reviewcard-value">{{ parseFloat(review.designrate).toFixed(1) }}</span>
            <span class="reviewcard-key">間取り</span>
            <span class="reviewcard-value">{{ parseFloat(review.layoutrate).toFixed(1) }}</span>
            <span class="reviewcard-key">住宅の性能</span>
            <span class="reviewcard-value">{{ parseFloat(review.specrate).toFixed(1) }}</span>
            <span class="reviewcard-key">付帯設備</span>
            <span class="reviewcard-value">{{ parseFloat(review.attachrate).toFixed(1) }}</span>
            <span class="reviewcard-key">保証</span>
            <span class="reviewcard-value">{{ parseFloat(review.guaranteerate).toFixed(1) }}</span>
            <span class="reviewcard-key">営業</span>
            <span class="reviewcard-value">{{ parseFloat(review.salesrate).toFixed(1) }}</span>
        </div>
        <div class="reviewcard-comment">
            <Comments>
                <div>
                    <span class="reviewcard-comment-key">費用：</span>
                    <span class="reviewcard-comment-comment">{{review.costcomment}}</span>
                </div>
                <div>
                    <span class="reviewcard-comment-key">デザイン：</span>
                    <span class="reviewcard-comment-comment">{{review.designcomment}}</span>
                </div>
                <div>
                    <span class="reviewcard-comment-key">間取り：</span>
                    <span class="reviewcard-comment-comment">{{review.layoutcomment}}</span>
                </div>
                <div>
                    <span class="reviewcard-comment-key">住宅の性能：</span>
                    <span class="reviewcard-comment-comment">{{review.speccomment}}</span>
                </div>
                <div>
                    <span class="reviewcard-comment-key">付帯設備：</span>
                    <span class="reviewcard-comment-comment">{{review.attachcomment}}</span>
                </div>
                <div>
                    <span class="reviewcard-comment-key">保証：</span>
                    <span class="reviewcard-comment-comment">{{review.guaranteecomment}}</span>
                </div>
                <div>
                    <span class="reviewcard-comment-key">営業：</span>
                    <span class="reviewcard-comment-comment">{{review.salescomment}}</span>
                </div>
            </Comments>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/css/mixin.scss";
.reviewcard {
    width: 840px;
    font-size: 14px;
    &-status {
        float: right;
        font-weight: 400;
        font-size: 11px;
        color: #fff;
        background: #999;
        padding: 3px 5px;
        border-radius: 2px;
    }
    &-comment {
        &-key {
            font-weight: 700;
        }
        &-comment {
            word-wrap: break-word;
        }
    }
    &-rate {
        font-weight: 700;
    }
    &-value {
        font-weight: 700;
    }
}
.vue-star-rating {
    display: inline!important;
    vertical-align: text-bottom;
}
</style>

<script>
import Comments from '~/components/atoms/comments'
export default {
    components: {Comments},
    data () {
        return {
            review: '',
        }
    },
    props: ['review'],
}
</script>

