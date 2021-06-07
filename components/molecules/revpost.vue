<template>
    <div class="revpost">
        <div class="revpost-titleandstar py-1">
            <Require />
            <RevH3 :revkey="revkey" class="px-3" />
        </div>
        <div class="revpost-star py-1">
            <RevStar />
        </div>
        <div class="revost-comment py-1">
            <CommentBox />
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/css/mixin.scss";
.revpost {
    width: 840px;
    &-titleandstar {
        display: inline;
        .require {
            display: inline;
        }
        .revh3 {
            display: inline;
        }
    }
}
</style>

<script>
import CommentBox from '~/components/atoms/commentbox'
import Require from '~/components/atoms/require'
import RevH3 from '~/components/atoms/revh3'
import RevStar from '~/components/atoms/revstar'

export default {
    components: {CommentBox, Require, RevH3, RevStar},
    props: ['revkey'],
}
</script>

