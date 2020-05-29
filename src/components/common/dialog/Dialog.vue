<template>
    <div class="Dialog" @click.stop="hiddenDialog">
        <div class="Dialog-pos">
            <div class="Dialog-cont" @click.stop>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dialog',
    methods: {
        hiddenDialog () {
            this.$emit('showHandle', false)
        }
    }
}
</script>

<style lang="less" scoped>
.fn () {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.Dialog {
    position: fixed;
    z-index: 999;
    .fn();
    background: rgba(202, 197, 197, 0.26);
    .Dialog-pos {
        position: relative;
        .fn();
        .Dialog-cont {
            position: absolute;
            right: 7px;
            top: 60px;
            padding: 11px;
            background-color: #fff;    
            border-radius: 6px;
        }
        .Dialog-cont::before {
            position: absolute;
            content: '';
            top: -9px;
            right: 14px;
            border-top: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 9px solid #fff;
        }
    }
}
</style>


