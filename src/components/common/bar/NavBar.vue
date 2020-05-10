<template>
    <div class="nav" :_height="_height" :style="{'height': _height+'px'}">
        <slot class="left-nav">左nav</slot>
        <slot class="center">nav标题</slot>
        <slot class="right-nav">右nav</slot>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    props: {
        _height: {
            type: Number,
            default: 40
        }
    }
}
</script>

<style lang="less" scoped>
.nav{
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    .left-nav {

    }
    .center {

    }
    .right-nav {

    }
}
</style>

