<template>
    <div class="maker-logo"> 
        <div class="maker-logo-container mx-3">
            <nuxt-link :to="`/detail/${maker.name_eng}`"><img v-bind:src="maker.image_url" v-bind:alt="maker.name" v-bind:title="maker.name"></nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.maker-logo { 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &-container{
        justify-content: flex-end;
        img {
            height: auto;
            width: 300px;
        }
        @include tab{
            img {
                height: auto;
                width: 200px;
            }
        }
        @include sp{
            img {
                height: auto;
                width: 150px;
            }
        }
    }
}
</style>

<script>
export default {
    props: ['maker']
}
</script>