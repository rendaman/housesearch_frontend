<template>
    <div class="maker-brand"> 
        <!--<div class="col-6">
            <AtomsMaker-logo />
        </div>
        <div class="col-6">
            <AtomsMaker-name />
        </div>-->
        <p>{{maker.name}}</p>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
</style>

<script>
export default {
  props: ['maker']
}
</script>
