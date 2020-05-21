<template>
  <div id="app">

    <keep-alive><router-view class="view"></router-view></keep-alive>

    <!-- 底部导航 -->
    <Tabbar v-if="navState"/>
  </div>
</template>

<script>
import '@/assets/css/initCss.css'
import '@/assets/css/iconfont/iconfont.css'
import Tabbar from '@/components/common/bar/Tabbar.vue'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {Tabbar},
  computed: mapState({
    navState: (state) => state.conmon.navState
  })
}
</script>

<style lang="less">
</style>
