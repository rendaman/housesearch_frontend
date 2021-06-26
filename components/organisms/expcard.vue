<template>
    <div class="expcard mx-auto py-4">
        <div class="">
            <span class="expcard-author"><i class="bi bi-person-fill"></i>{{expense.author}}さん</span>
            <span class="expcard-status">{{expense.status}}</span>
        </div>
        <div class="expcard-eachrate py-2">
            <span class="expcard-eachrate-value">{{expense.cost}}万円 / </span>
            <span class="expcard-eachrate-value">{{expense.landarea}}坪</span>
        </div>
        <div class="expcard-comment">
            <Comments>
                <div>
                    <span class="expcard-comment-key">グレード</span>
                    <span class="expcard-comment-comment">{{expense.gradecomment}}</span>
                </div>
                <div>
                    <span class="expcard-comment-key">値上がりするポイント</span>
                    <span class="expcard-comment-comment">{{expense.costupcomment}}</span>
                </div>
                <div>
                    <span class="expcard-comment-key">値下がりするポイント</span>
                    <span class="expcard-comment-comment">{{expense.costdowncomment}}</span>
                </div>
                <div class="">
                    <i class="bi bi-file-earmark-image"></i>
                    <a v-if="expense.expimage!=''" :href="expense.expimage">
                        費用明細を見る
                    </a>
                </div>
                <div class="">
                    <i class="bi bi-file-earmark-image"></i>
                    <a v-if="expense.layoutimage!=''" :href="expense.layoutimage">
                        間取りを見る
                    </a>
                </div>
            </Comments>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.expcard {
    max-width: 840px;
    font-size: 14px;
    @include sp {
        border-bottom: 1px dashed #ccc;
    }
    &-eachrate {
        &-key {
            @include sp {
                display: none;
            }
        }
        &-value {
            @include sp {
                display: none;
            }
        }
        &-date {
            float:right;
            color: #999;
            @include sp {
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
    &-value {
        font-weight: 700;
    }
}
</style>

<script>
import Comments from '~/components/atoms/comments'
export default {
    components: {Comments},
    props: ['expense'],
}
</script>

