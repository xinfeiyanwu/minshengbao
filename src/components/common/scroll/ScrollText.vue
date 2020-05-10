<template>
  <div class="scrollBox" 
    :style="{'width': _width+'px'}"
    :_width="_width">
    <div 
      :class="{
        scrollCont: true,
        no_transition
      }" 
      :style="{ 
        'transform': `translateY(-${index*100}%)`,
        'transition': 'all 1s'
      }"
    >
      <div 
        class="van-ellipsis" 
        v-for="(item,i) in txtList" 
        :key="i">
        {{item}}
      </div>
    </div>
  </div>
</template>
<script>
import {STList} from '@/api/home/home.js'
import { setInterval } from 'timers';
export default {
  name: "ScrollText",
  props: {
    _width: {
      type: Number,
      default: 165
    },
  },
  data(){
    return {
      txtList: [],
      index: 0,
      no_transition: false
    }
  },
  methods: {
    scrollHandle(){ 
      setInterval(() => {
        this.no_transition = false;
        this.index++;
        //等待最后一个滚动完成后再去复位
        setTimeout(()=>{
          if(this.index==this.txtList.length-1) {
            this.no_transition = true;
            this.index = 0;
          }
        },1000);
      }, 2000);
    }
  },
  created(){
    STList().then((res) => {
      this.txtList = [...res, res[0]];
      if(this.txtList.length > 1) this.scrollHandle(); 
    })
  },
  mounted(){
  }
}
</script>

<style lang="less" scoped>
.scrollBox{
  height: 100%;
  padding-left: 4px;
  overflow-y: hidden;
  .scrollCont, .van-ellipsis{
    height: 100%;
    line-height: 20px;
  }
  .no_transition{
    transition-duration: 0s !important;
  }
}
</style>


