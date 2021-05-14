<template>
    <div class="maker-name"> 
        <h1>{{maker.name}}</h1>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.maker-name { 
    align-items: center;
    font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
    font-weight: bold; 
    line-height: 100%;
    height: 40px;
    @include pc {
        font-size: 15px;
    }
    @include tab{
        font-size: 13px;
    }
}
</style>

<script>
import maker from "../molecules/maker-brand"
export default {
    data() {
        return {
            maker: maker
        }
    },
}
</script>