<template>
    <div class="exppost">
        <div class="exppost-titleandstar py-1">
            <Require />
            <RevH3  class="px-3"
                    :revkey="revkey.namekana" 
            >
            </RevH3>
        </div>
        <div class="revost-comment py-1">
            <CommentBox     @recvFunc="updateComment"
            >
            </CommentBox>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/css/mixin.scss";
.exppost {
    max-width: 840px;
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

export default {
    components: {CommentBox, Require, RevH3 },
    props: ['revkey', 'resbody'],
    data(){
        return {
            inputText: "",
        }
    },
    methods: {
        updateComment(comment) {
            var valname = this.revkey.name
            eval("this.resbody." + valname + "= comment");
            this.$emit('commentUpdate', this.resbody)
        },
    },
}
</script>

