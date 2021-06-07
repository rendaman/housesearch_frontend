<template>
    <div class="revh3">
        {{ revkey }}
    </div>
</template>

<style lang="scss">
@import "@/assets/css/mixin.scss";
.revh3 {
    font-size: 13px;
    font-weight: 700;
}
</style>

<script>
export default {
    props: ['revkey'],
}
</script>

