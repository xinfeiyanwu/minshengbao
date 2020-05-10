<template>
    <div id="Tabbar">
        <van-tabbar 
        active-color="#e86b0f" 
        inactive-color="#000"
        route
        >
        <van-tabbar-item
            v-for="(item,i) in tabItem" 
            :key="i"
            replace 
            :to="item.url" 
            :icon="item.icon">
            {{item.name}}
        </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: "Tabbar",
    data(){
        return {
            tabItem: [
                {
                url: '/',
                icon: 'home-o',
                name: '主页'
                },
                {
                url: '/Shopping',
                icon: 'shop-o',
                name: '商城'
                },
                {
                url: '/Cart',
                icon: 'cart-o',
                name: '购物车'
                },
                {
                url: '/Self',
                icon: 'contact',
                name: '我的'
                },
            ]
        }
    },
}
</script>

<style lang="less" scoped>

</style>


