<template>
  <!--滑动区域-->
  <div 
    :pullDown="pullDown"
    :pullUp="pullUp"
    :bounce="bounce"
    class="BScroll" 
    :pullDownEvName="pullDownEvName"
    ref="bs">
    <div class="container">
      <div class="pullDown">
        <slot name="pullDown">
          下拉刷新...
        </slot>
      </div>
      <div class="cont"><slot>滚动的内容</slot></div>
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
import {mapState} from 'vuex'
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
    pullDownEvName: String,
  },
  data () {
    return {
      bs: null,
      prevPosy: 0
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
        // console.log(ev)
        const posy = -ev.y;
        if(posy >= 0 && posy <= 80) this.$store.commit('listenOpa', posy);
      })
      this.bs.on('pullingDown', (ev) => {
        console.log('pullingDown')
        
        //利用自定义事件去实现父级获取数据对BScroll进行数据填充
        this.$emit(this.pullDownEvName);
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
    min-height: 100%;
    .pullDown, .pullUp{
      position: absolute;
      width: 100%;
      line-height: 30px;
    }
    .pullUp {
      bottom: 0;
      transform: translateY(100%)
    }
    .pullDown{
      top: 0;
      transform: translateY(-100%)
    }
    .cont{
      height: 100%;
    }
  }
}
</style>
