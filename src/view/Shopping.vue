<template>
  <div class="Shopping">
     <!-- 头部导航 -->
    <NavBar>
       <template #left-nav>
         <div class="input">
           <van-icon name="search" />
           <input type="text" v-model="value" placeholder="搜索商品,品牌">
         </div>
      </template>

      <template #right-nav>
        <van-icon size="26px" class="iconfont icon-bell-regular" v-if="msgNum>0" :badge="msgNum"></van-icon>
        <van-icon size="26px" class="iconfont icon-bell-regular" v-else></van-icon>
      </template>
    </NavBar>

    <BScroll
      :pullDown="{
        threshold: 50,
        stop: 30
      }"
      :bounce="true"
      pullDownEvName="pullDownReq"
      @pullDownReq="requireData(false)"
      ref="bs">
      <div class="swiper-container Swiper_nav">
        <div class="swiper-wrapper">
          <div 
            v-for="(item,i) in shoppingTopData" 
            :key="i"
            class="swiper-slide"
          >
            <van-image 
              @click="navigatorTo(item.url)"
              :src="item.img" 
              alt="item.img" />
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>

      <van-grid :border="false" :column-num="5">
        <template v-for="(item,i) in vanGridData" >
          <van-grid-item 
            @click="navigatorTo(item.url)"
            :key="i">
            <van-image :src="item.img" />
            <p>{{item.name}}</p>
          </van-grid-item>
        </template>
      </van-grid>

      <div class="shopping-item" v-for="(item,i) in spItemData" :key="i">
        <HeadLine>精选厨电</HeadLine>
        <van-image :src="item.img" @click="navigatorTo('/')"/>
      </div> 

      <div class="Shopping_Bot">
        <van-skeleton title avatar :row="1" :loading="skeletonState">
          <HeadLine>精选厨电</HeadLine>
          <div class="swiper-container Swiper_Bot">
            <div class="swiper-wrapper">
              <div 
                v-for="(item,i) in spBotData" 
                :key="i"
                class="swiper-slide"
              >
                <div 
                  class="bottom-shop" v-for="(item_child,j) in item" 
                  @click="navigatorTo(item_child.url)"
                  :key="j">
                  <img :src="item_child.img" />
                  <div class="shopping-cont">
                    <p class="van-ellipsis">{{item_child.text}}</p>
                    <div class="coin">&yen; <strong>{{item_child.coin.split('.')[0]}}</strong>.<span>{{item_child.coin.split('.')[1]}}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </van-skeleton>
      </div>

      <template #pullUp>
        已无更多数据
      </template>
    </BScroll>
  </div>
</template>

<script>
import {shoppingTopReq,spItemDataReq,spBotDataReq} from '@/api/shopping/shopping'
import BScroll from "@/components/common/scroll/BScroll.vue";
import NavBar from '@/components/common/bar/NavBar.vue'
import Swiper from 'swiper'
import '../../node_modules/swiper/js/swiper.min.js'
import '../../node_modules/swiper/css/swiper.min.css'
import HeadLine from '@/components/common/line/HeadLine.vue'
import {navigatorTo} from '@/unit/unit.js'
import { setTimeout } from 'timers';
export default {
  name: 'Shopping',
  components: {HeadLine,BScroll,NavBar},
  data(){
    return {
      url: require('@/assets/img/shopping/swiper-nav.png'),
      shoppingTopData: [],
      vanGridData: [
        {
          url: "/Home",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/Home",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/Home",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/Home",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/Home",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/Home",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/Home",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/Home",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/Home",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/Home",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
      ],
      spItemData: [],
      spBotData: [],
      Swiper_nav: null,
      Swiper_Bot: null,
      value: '',
      msgNum: 4,
      navigatorTo: navigatorTo,  //跳转路由函数
      skeletonState: true
    }
  },
  methods: {
    initSwiper(){ 
      this.Swiper_nav = new Swiper('.Swiper_nav',{
        loop:true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        observer: true,
      });
      this.Swiper_Bot = new Swiper('.Swiper_Bot',{
        loop:true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        observer: true
      });
    },
    requireData(auto){
      Promise.all([
        shoppingTopReq(),
        spItemDataReq(),
        spBotDataReq()
      ]).then((res) => {
        [this.shoppingTopData,this.spItemData,this.spBotData] = res;
        if(auto){
          this.$nextTick(() => {
            //初始化swiper
            this.initSwiper();
            this.skeletonState = false;
          })
        }
        else{
          this.$refs.bs.bs.finishPullDown();
          this.skeletonState = false;
          console.log('finishPullDown');
        }
      })
    },
  },
  created(){
    this.requireData(true);
  },
  mounted(){
  }
}
</script>

<style scoped lang="less">
.Shopping{
  overflow: hidden;
  .nav{
    .input{
      margin-left:10px;
      display: flex;
      align-items: center;
      background-color: #57575742;
      border-radius: 40px;
      color: #fff;
      .van-icon-search{
        margin-left:10px;
        font-size: 22px;
      }
      input{       
        width: 260px;
        height: 33px;
        border: none;
        background: none;
        font-size: 17px;
        line-height: 40px;
      }
      input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color: #fff;
      }
      input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: #fff;
      }
      input::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: #fff;
      }
      input:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #fff;
      }
    }
    .icon-bell-regular{
      margin-right: 15px;
    }
  }

  .Swiper_nav {
    img { height: 208px; }
  }

  .shopping-item {
    img { height: 152px; }
  }

  .Shopping_Bot{
    position: relative;
    padding-bottom: 26px;
    .bottom-shop{
      display: flex;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      img{
        width: 100px;
      }
      .shopping-cont{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: calc(100% - 100px);
        padding-left: 10px;
        text-align: left;

        .coin{
          color: #d36266;
          font-size: 12px;
          strong{
            font-size: 16px;
          }
        }
      }
    }

    .swiper-pagination-bullets{
      left: 50%;
      transform: translateX(-50%);
      /deep/ span:last-child{
        margin-left: 6px;
      }
    }
  }
}
</style>
