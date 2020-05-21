<template>
    <div 
        class="nav" 
        :_height="_height"
        :style="{'height': _height+'px','background-color': 'rgb(253, 150, 49,'+opacity+')'}"> 
        <div class="left-nav">
            <slot name="left-nav"></slot>
        </div>
        <div class="center" :style="{'opacity': opacity}">
            <slot></slot>
        </div>
        <div class="right-nav">
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
    background-color: rgb(253, 150, 49);
    z-index: 999;
    color: #fff;
    .left-nav, .right-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 500;
    }
    .left-nav {
        left: 0;
    }
    .right-nav {
        right: 0;
    }
    .center {    
        width: 100%;
        padding-top: 18px;
    }
}
</style>

