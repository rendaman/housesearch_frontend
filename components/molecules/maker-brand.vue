<template>
    <div class="maker-brand">
        <div class="maker-brand-container">
            <div class="col-6 ">
                <AtomsMaker-logo v-bind:maker="maker" class="maker-brand-container-logo" />
            </div>
            <div class="col-6 ">
                <AtomsMaker-name v-bind:maker="maker" class="maker-brand-container-name" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.maker-brand {
    margin-bottom: 10px;
    border-bottom: 1px solid #BCBCBC;;
    overflow: hidden;
    &-container {
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: baseline;
        height: 175px;
        @include tab{
            height: 150px;
        }
        @include sp{
            height: 100px;
        }
        &-name {
            border-left: 1px solid;
            padding-left: 20px;
        }
    }
}
</style>

<script>
import MakerLogo from "../atoms/maker-logo"
import MakerName from "../atoms/maker-name"
export default {
  components: {
    MakerLogo,
    MakerName,
  },
  props: ['maker']
}
</script>
