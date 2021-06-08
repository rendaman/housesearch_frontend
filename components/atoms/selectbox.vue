<template>
    <div class="selectbox mx-auto py-3">
        <div class="selectbox-top">
            <span :class="{'selectbox-top-req': !req}">
                <Require />
            </span>
            <RevH3  class="px-3"
                    :revkey="title" 
            >
            </RevH3>
        </div>
        <select class="mt-3 form-select" @input="selected" required>
            <option value="" style="display: none;">{{ pholder }}</option>
            <option v-for="option in options" :key="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
import Require from '~/components/atoms/require'
import RevH3 from '~/components/atoms/revh3'
export default {
    components: {Require, RevH3},
    props: {
        pholder: {
            type: String,
            default: '',
            required: true,
        },
        options: {
            type: Array,
            required: true,
        },
        title: {
            type: String,
            default: '',
            required: false,
        },
        req: {
            type: Boolean,
            default: false,
        }
  },
  methods: {
        selected($event) {
            this.$emit('statusUpdate', $event.target.value);
        },
    },
};
</script>

<style lang="scss">
.form-select {
    background-color: #f8f7f7;
    font-size: 13px;
    border: 1px solid #999;
    border-radius: 4px;
}
.selectbox {
    max-width: 840px;
    &-top {
        display: inline;
        &-req {
            display: none;
        }
    }
}
.revh3 {
    display: inline;
}
.require {
    display: inline;
}
</style>