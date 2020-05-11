<template>
    <div class="nav" 
        :_height="_height" 
        :style="{
            'height': _height+'px',
            'opacity': opacity
        }">
        <div class="left-nav">
            <slot class="left-nav">left</slot>
        </div>
        <div class="center">
            <slot name="center">center</slot>
        </div>
        <div class="right-nav">
            <slot name="right-nav">right</slot>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Nav',
    props: {
        _height: {
            type: Number,
            default: 80
        }
    },
    computed: mapState({
        opacity: (state) => state.conmon.opacity
    })
}
</script>

<style lang="less" scoped>
.nav{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    background-color: #fd9631;
    z-index: 999;
    .left-nav, .right-nav {
        flex-basis: 25%;
    }
    .center {
        flex-basis: 50%;
    }
}
</style>

