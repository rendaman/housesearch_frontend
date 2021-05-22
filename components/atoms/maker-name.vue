<template>
    <div class="maker-name"> 
        <div class="maker-name-container">
            <nuxt-link :to="`/detail/${maker.name_eng}`"><p>{{maker.name}}</p></nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.maker-name { 
    &-container{
        font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
        font-weight: bold; 
        font-size: 20px;
        line-height: 100px;
        vertical-align: baseline;
        p {
            margin-bottom: 0;
        }
        @include sp{
            font-size: 15px;
            line-height: 50px;
        }
    }
}
</style>

<script>
export default {
    props: ['maker']
}
</script>