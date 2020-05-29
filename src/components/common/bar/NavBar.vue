<template>
    <div 
        class="nav" 
        :_height="_height"
        :style="{
            'height': _height+'px',
        }"> 
        <div class="left-nav" :style="{'left': _left}">
            <slot name="left-nav">&lt;</slot>
        </div>
        <div class="center" :style="{'opacity': isOpacity?opacity:1}">
            <div class="cont"><slot></slot></div>
        </div>
        <div class="right-nav" :style="{'right': _right}">
            <slot name="right-nav"></slot>
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
            default: 70
        },
        _left: {
            type: String,
            default: '10px'
        },
        _right: {
            type: String,
            default: '10px'
        },
        isOpacity: {
            type: Boolean,
            default: true
        }
    },
    created(){
        this.$store.commit('setHeight', this._height);
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
    align-items: center;
    align-content: center;
    width: 100%;
    text-align: center;    
    z-index: 900;
    color: #fff;
    .left-nav, .right-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 999;
    }
    // .left-nav {
    //     left: 0;
    // }
    // .right-nav {
    //     right: 0;
    // }
    .center {    
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #f1642c, #ea722b);
        .cont {
            padding-top: 15px;
        }
    }
}
</style>

