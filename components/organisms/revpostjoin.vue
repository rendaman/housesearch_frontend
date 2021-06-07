<template>
    <div class="revpostjoin">
        <div v-for="revkey in revkeys" :key="revkey">
            <RevPost class="mx-auto py-2" :revkey="revkey" />
        </div>
        <GeneralButton class="my-5 mx-auto text-center">
            <a class="mx-auto" href="">投稿</a>
        </GeneralButton>
    </div>
</template>

<script>
import RevPost from '~/components/molecules/revpost'
import GeneralButton from '~/components/atoms/generalbutton'
export default {
    data () {
        return {
            revkeys: ["費用", "デザイン", "間取り", "住宅の性能", "付帯設備", "保証", "営業"],
        }
    },
    components: {
        RevPost, GeneralButton
    },
}
</script>

<style lang="scss">
</style>