<template>
    <div class="nav-navbarondetail" :class="{topfix: isFixed}" id="target">
        <div class="nav-navbarondetail-container row">
            <div class="col-2">
            </div>
            <nuxt-link :to="`/review/${maker.name_eng}`" class="col-2 nav-navbarondetail-container-btn" >
                <NavButton :isRightFlag=false>
                    <i class="bi bi-chat-left-text"></i>  口コミ
                </NavButton>
            </nuxt-link>
            <nuxt-link :to="`/postreview/${maker.name_eng}`" class="col-2 nav-navbarondetail-container-btn" >
                <NavButton :isRightFlag=false>
                    <i class="bi bi-pencil-square"></i> 口コミ投稿
                </NavButton>
            </nuxt-link>
            <nuxt-link :to="`/expense/${maker.name_eng}`" class="col-2 nav-navbarondetail-container-btn" >
                <NavButton :isRightFlag=false>
                    <i class="bi bi-file-text"></i> 見積明細
                </NavButton>
            </nuxt-link>
            <nuxt-link :to="`/review/${maker.name_eng}`" class="col-2 nav-navbarondetail-container-btn" >
                <NavButton :isRightFlag=true>
                    <i class="bi bi-pencil-square"></i> 明細投稿
                </NavButton>
            </nuxt-link>
            <div class="col-2">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav-navbarondetail {
    width: 100vw;
    background-color: #eee;
    box-shadow: inset 0px 10px 10px -10px rgba(0, 0, 0, .5);
    -webkit-box-shadow: inset 0px 10px 10px -10px rgba(0, 0, 0, .5);
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

.topfix {
    transition: 0.25s;
    background-color: #fff;
    box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.5);
}

</style>

<script>
import NavButton from "../atoms/nav-button"
export default {
    components: {
        NavButton,
    },
    props: ['maker'],
    data () {
        return {
            isFixed: false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll () {
            const elem = document.getElementById('target')
            const rect = elem.getBoundingClientRect().top;
            if (rect <= 5){
                this.isFixed = true;
            } else {
                this.isFixed = false;
            }
        }
    }    
}
</script>