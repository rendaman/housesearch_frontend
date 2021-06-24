<template>
    <div class="reviewcard mx-auto py-4">
        <div class="">
            <span class="reviewcard-author"><i class="bi bi-person-fill"></i>{{review.author}}さん</span>
            <client-only>
                <star-rating v-model="review.get_rateavg"
                                    :increment="0.5"
                                    :max-rating="5"
                                    inactive-color="#ccc"
                                    active-color="#feca2f"
                                    :read-only=true
                                    :show-rating=false
                                    :star-size="17"
                />
            </client-only>
            <span class="reviewcard-rate">{{review.avgrate}}</span>
            <span class="reviewcard-status">{{review.status}}</span>
        </div>
        <div class="reviewcard-eachrate py-2">
            <span class="reviewcard-eachrate-key">費用</span>
            <span class="reviewcard-eachrate-value">{{ parseFloat(review.costrate).toFixed(1) }}</span>
            <span class="reviewcard-eachrate-key">デザイン</span>
            <span class="reviewcard-eachrate-value">{{ parseFloat(review.designrate).toFixed(1) }}</span>
            <span class="reviewcard-eachrate-key">間取り</span>
            <span class="reviewcard-eachrate-value">{{ parseFloat(review.layoutrate).toFixed(1) }}</span>
            <span class="reviewcard-eachrate-key">性能</span>
            <span class="reviewcard-eachrate-value">{{ parseFloat(review.specrate).toFixed(1) }}</span>
            <span class="reviewcard-eachrate-key">保証</span>
            <span class="reviewcard-eachrate-value">{{ parseFloat(review.guaranteerate).toFixed(1) }}</span>
            <span class="reviewcard-eachrate-key">営業</span>
            <span class="reviewcard-eachrate-value">{{ parseFloat(review.salesrate).toFixed(1) }}</span>
            <span class="reviewcard-eachrate-date">投稿日：{{review.create_date.substr(0,10).replace(/-/g,'/')}}</span>
        </div>
        <div class="reviewcard-comment">
            <Comments>
                <div>
                    <span class="reviewcard-comment-key">費用</span>
                    <span class="reviewcard-comment-comment">{{review.costcomment}}</span>
                </div>
                <div>
                    <span class="reviewcard-comment-key">デザイン</span>
                    <span class="reviewcard-comment-comment">{{review.designcomment}}</span>
                </div>
                <div>
                    <span class="reviewcard-comment-key">間取り</span>
                    <span class="reviewcard-comment-comment">{{review.layoutcomment}}</span>
                </div>
                <div>
                    <span class="reviewcard-comment-key">性能</span>
                    <span class="reviewcard-comment-comment">{{review.speccomment}}</span>
                </div>
                <div>
                    <span class="reviewcard-comment-key">保証</span>
                    <span class="reviewcard-comment-comment">{{review.guaranteecomment}}</span>
                </div>
                <div>
                    <span class="reviewcard-comment-key">営業</span>
                    <span class="reviewcard-comment-comment">{{review.salescomment}}</span>
                </div>
            </Comments>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/css/mixin.scss";
.reviewcard {
    max-width: 840px;
    font-size: 14px;
    @include tab {
        border-bottom: 1px dashed #ccc;
    }
    &-eachrate {
        &-key {
            @include tab {
                display: none;
            }
        }
        &-value {
            @include tab {
                display: none;
            }
        }
        &-date {
            float:right;
            color: #999;
            @include tab {
                float: none;
            }
        }
    }
    &-author {
        @include sp {
            display: block;
        }
    }
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
            margin-right: 10px;
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
    props: {
        review: {
            avgrate: {
                type: Number,
                default: 0.00,
            }
        }
    }
}
</script>

