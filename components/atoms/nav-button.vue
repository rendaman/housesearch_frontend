<template>
    <div class="nav-button"> 
        <div class="nav-button-container" v-bind:class="{isRight: isRightFlag}">
            <button class="nav-button-container-button">
                <slot />
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.nav-button {
    padding-top: 20px;
    padding-bottom: 20px;
    &-container {
        text-align: center;
        border-right: 1px solid #999;
        transition: 0.5s;
        @include sp {
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
.isRight {
    border-right: none;
}

</style>

<script>
export default {
    props: ['isRightFlag'],
}
</script>