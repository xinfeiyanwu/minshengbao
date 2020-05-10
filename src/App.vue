<template>
  <div id="app">
    
   <keep-alive><router-view class="view"></router-view></keep-alive>

    <Tabbar />
  </div>
</template>

<script>
import '@/assets/css/initCss.css'
import Tabbar from '@/components/common/bar/Tabbar.vue'
export default {
  name: 'App',
  components: {Tabbar}
}
</script>

<style lang="less">
</style>
