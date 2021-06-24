<template>
    <div class="comment">
        <div class="comment-container">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.comment {
    &-container {
        padding: 18px;
        border: 1px solid #eee;
        border-radius: 4px;
        background-color: #f8f7f7;
        font-size: 13px;
        @include tab {
            border: none;
            background-color: transparent;
            padding: 0;
        }
    }
}
</style>

<script>
</script>

