<template>
  <div id="app">
    <NavBar />

   <router-view class="view"></router-view>

    <Tabbar />
  </div>
</template>

<script>
import '@/assets/css/initCss.css'
import Tabbar from '@/components/common/bar/Tabbar.vue'
import NavBar from '@/components/common/bar/NavBar.vue'
export default {
  name: 'App',
  components: {Tabbar,NavBar}
}
</script>

<style lang="less">
</style>
