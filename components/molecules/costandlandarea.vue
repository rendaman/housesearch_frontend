<template>
    <div class="costandlandarea">
        <div class="costandlandarea-content py-1">
            <div class="py-2 costandlandarea-content-row">
                <Require />
                <RevH3  class="mx-3"
                        :revkey="'費用'" 
                >
                </RevH3>
                 <input type="number" min="0" @change="onChangeCost" v-model="cost">
                 <span class="unit">万円</span>
            </div>
            <div class="py-2 costandlandarea-content-row">
                <Require />
                <RevH3  class="mx-3"
                        :revkey="'坪数'" 
                >
                </RevH3>
                 <input type="number" min="0" @change="onChangeLand" v-model="landarea">
                 <span class="unit">坪</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.costandlandarea {
    max-width: 840px;
    &-content {
        display: inline;
        .col-6 {
            .require {
                display: inline;
            }
            .revh3 {
                display: inline;
            }
        }
    }
}
.unit {
    font-size: 13px;
}
.row>* {
    padding-left: 0!important;
    padding-right: 0!important;
}
</style>

<script>
import Require from '~/components/atoms/require'
import RevH3 from '~/components/atoms/revh3'

export default {
    components: {Require, RevH3 },
    props: ['revkey', 'resbody'],
    data(){
        return {
            cost:0,
            landarea:0,
        }
    },
    methods: {
        onChangeCost() {
            this.resbody.cost = this.cost
            this.$emit('commentUpdate', this.resbody)
        },
        onChangeLand() {
            this.resbody.landarea = this.landarea
            this.$emit('commentUpdate', this.resbody)
        },
    },
}
</script>

