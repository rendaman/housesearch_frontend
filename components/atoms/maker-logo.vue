<template>
    <div class="maker-logo"> 
        <img v-bind:src="maker.image_url" v-bind:alt="maker.name" v-bind:title="maker.name">
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.maker-logo { 
    display: flex;
    justify-content: center;
    align-items: center;
    @include pc{
        height: 100px;
        img {
          height: auto;
          width: 100px;
        }
    }
    @include sp{
        height: 80px;
        img {
          height: auto;
          width: 100px;
        }
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