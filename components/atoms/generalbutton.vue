<template>
    <div class="generalbutton">
        <slot />
    </div>
</template>

<style lang="scss">
@import "@/assets/css/mixin.scss";
.generalbutton {
    a{
    width: 270px;
    height: 60px;
    color: #333;
    font-size: 20px;
    background: transparent;
    text-align: center;
    line-height: 60px;
    border: 1px solid #333;
    border-radius: 5px;
    position: relative;
    z-index: 1;
    display: block;
    overflow: hidden;
    transition: .3s;
    &::before {
        content: "";
        width: 120%;
        height: 200%;
        position: absolute;
        top: -50%;
        right: 0;
        z-index: -1;
        background: #333;
        border-radius: 0 100% 100% 0;
        transform: translateX(-100%);
        transition: transform ease .3s;
    }
    &:hover {
        color: white;
    }
    &:hover::before {
        transform: translateX(10%);
    }
    }
}
</style>

<style lang="scss">
</style>