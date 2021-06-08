<template>
    <div class="generalbutton">
        <a @click="sendEvent" class="mx-auto" href="javascript:void(0)">
            {{title}}
        </a>
    </div>
</template>

<style lang="scss">
@import "@/assets/css/mixin.scss";
.generalbutton {
    a {
        width: 250px;
        height: 55px;
        color: #333;
        font-size: 18px;
        background: white;
        border: 1px solid #333;
        text-align: center;
        line-height: 60px;
        border-radius: 2px;
        display: block;
        transition: .25s;
        &:hover {
            background: #333;
            color: white;
        }
    }
}
</style>

<script>
export default {
    props: ['title'],
    methods: {
        sendEvent () {
            this.$emit('sendButtonPush')
        }
    },
}
</script>
