<template>
    <div class="nav-navbarondetail">
        <div class="nav-navbarondetail-container row">
            <nuxt-link :to="`/review/${maker.name_eng}`" class="col-3 nav-navbarondetail-container-btn" >
                <NavButton>
                    <i class="bi bi-chat-left-text"></i>  口コミ
                </NavButton>
            </nuxt-link>
            <nuxt-link :to="`/review/${maker.name_eng}`" class="col-3 nav-navbarondetail-container-btn" >
                <NavButton>
                    <i class="bi bi-pencil-square"></i> 口コミ投稿
                </NavButton>
            </nuxt-link>
            <nuxt-link :to="`/expense/${maker.name_eng}`" class="col-3 nav-navbarondetail-container-btn" >
                <NavButton>
                    <i class="bi bi-file-text"></i> 見積明細
                </NavButton>
            </nuxt-link>
            <nuxt-link :to="`/review/${maker.name_eng}`" class="col-3 nav-navbarondetail-container-btn" >
                <NavButton>
                    <i class="bi bi-pencil-square"></i> 明細投稿
                </NavButton>
            </nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav-navbarondetail {
    height: 65px;
    overflow: hidden;
    &-container {
        height: 65px;
        &-btn {
            padding-right: 0;
            padding-left: 0;
        }
    }
}

</style>

<script>
import NavButton from "../atoms/nav-button"
export default {
    components: {
        NavButton,
    },
    props: ['maker'],
}
</script>