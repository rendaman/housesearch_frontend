<template>
    <div class="expcard mx-auto py-4">
        <div class="">
            <span class="expcard-author"><i class="bi bi-person-fill"></i>{{expense.author}}さん</span>
            <span class="expcard-status">{{expense.status}}</span>
        </div>
        <div class="expcard-eachrate py-2">
            <span class="expcard-eachrate-value">費用：{{expense.cost}}万円 / </span>
            <span class="expcard-eachrate-value">坪数：{{expense.landarea}}坪</span>
            <span class="reviewcard-eachrate-date">投稿日：{{expense.create_date.substr(0,10).replace(/-/g,'/')}}</span>
        </div>
        <div class="expcard-comment">
            <Comments>
                <div>
                    <span class="expcard-comment-key">グレード</span>
                    <p class="expcard-comment-comment">{{expense.gradecomment}}</p>
                </div>
                <div>
                    <span class="expcard-comment-key">値上がりするポイント</span>
                    <p class="expcard-comment-comment">{{expense.costupcomment}}</p>
                </div>
                <div>
                    <span class="expcard-comment-key">値下がりするポイント</span>
                    <p class="expcard-comment-comment">{{expense.costdowncomment}}</p>
                </div>
                <div class="expcard-comment-link my-3">
                    <a v-if="expense.expimage!=''" :href="expense.expimage" class="expcard-comment-link-btn">
                        <i class="bi bi-file-earmark-image"></i>費用明細を見る
                    </a>
                    <a v-if="expense.layoutimage!=''" :href="expense.layoutimage" class="expcard-comment-link-btn">
                        <i class="bi bi-file-earmark-image"></i>間取りを見る
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
        &-link{
            &-btn {
                text-align: center;
                border: 1px solid;
                border-radius: 2px;
                margin-bottom: 10px;
                margin-right: 100px;
                padding-right: 10px;
                padding-left: 10px;
                padding-top: 20px;
                padding-bottom: 20px;
                font-size: 14px;
                background-color: #F0F0F0;
                box-shadow: inset 0px -10px 30px -10px rgba(192, 192, 192, .5);
                display: block;
                font-weight: 700;
            }
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

