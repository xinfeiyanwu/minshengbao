<template>
  <!--滑动区域-->
  <div 
    :pullDown="pullDown"
    :pullUp="pullUp"
    :bounce="bounce"
    class="BScroll" 
    ref="bs">
    <div class="container">
      <div class="pullDown">
        <slot name="pullDown">
          下拉刷新...
        </slot>
      </div>
      <slot>滚动的内容</slot>
      <div class="pullUp">
        <slot name="pullUp">
          上拉加载...
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'BScroll',
  props: {
    pullDown: {
      type: [Boolean,Object],
      default: false
    },
    pullUp: {
      type: [Boolean,Object],
      default: false
    },
    bounce: {
      type: [Boolean,Object],
      default: false
    },
    EType: String
  },
  data () {
    return {
      bs: null,
    }
  },
  mounted () {
    this.$nextTick(() => {
     this.bs = new BScroll(this.$refs.bs, {
        probeType: 3,
        pullDownRefresh: this.pullDown,
        //正上负下,零为最低部
        pullUpLoad: this.pullUp,
        bounce: this.bounce,
        zoom: true,
        tap: true,
        click: true
      })

      this.bs.on('scroll', (ev) => {
        // console.log(ev);
      })
      this.bs.on('pullingDown', (ev) => {
        console.log('pullingDown')
        
        this.$emit(this.EType);
        // setTimeout(() => {
        //   this.bs.finishPullDown();
        // }, 3000);
      })
      this.bs.on('pullingUp', (ev) => {
        console.log('pullingUp')
        this.bs.finishPullUp();
      })
    })
  },
}
</script>

<style scoped lang="less">
.BScroll{
  height: 100%;
  .container{
    .pullDown, .pullUp{
      position: absolute;
      width: 100%;
      line-height: 30px;
    }
    .pullDown{
      transform: translateY(-100%)
    }
  }
}
</style>
