<template>
    <div class="nav-button" v-bind:class="{topfix: isFixed}"> 
        <div class="nav-button-container">
            <button class="nav-button-container-button" id="target">
                <slot />
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.nav-button {
    background-color: #eee;
    box-shadow: inset 0px 10px 10px -10px rgba(0, 0, 0, .5);
    padding-top: 20px;
    padding-bottom: 20px;
    &-container {
        text-align: center;
        border-right: 1px solid #999;
        transition: 0.5s;
        @include sp{
            border-right: hidden;
        }
        &-button {
            width: 100%;
            background-color: transparent;
            padding-right: 0;
            padding-left: 0;
            border-radius: 0;
            border-style: none;
            font-size: inherit;
            line-height: inherit;
            outline: none;
            cursor: pointer;
            flex: 1;
            height: 25px;
            font-size: 13px;
            font-weight: 700;
            color: #333;
            transition: opacity .2s ease;
            overflow: hidden;
            i {
                color: $maincolor;
            }
            &:hover {
                color: #777;
                i {
                    color: $subcolor;
                }
            }
        }
    }
}
.topfix {
    transition: 0.25s;
    background-color: #fff;
}
</style>

<script>
export default {
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
            if (rect == 21){
                this.isFixed = true;
            } else {
                this.isFixed = false;
            }
        }
    }
}
</script>