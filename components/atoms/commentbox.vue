<template>
    <div class="commentbox">
        <textarea v-model="inputText" required placeholder="この場所での自分の体験や感想を共有しましょう" @change="onChange"></textarea>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.commentbox {
    width: 100%;
    textarea {
        width: 100%;
        height: 60px;
        padding: 5px;
        border: 1px solid #999;
        border-radius: 4px;
        background-color: #f8f7f7;
        font-size: 13px;
    }
}
</style>

<script>
export default {
    data () {
        return {
            inputText: "",
        }
    },
    methods: {
        onChange(event) {
            this.$emit('recvFunc', this.inputText);
        },
    },
}
</script>

