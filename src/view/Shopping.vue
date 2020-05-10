<template>
  <div class="Shopping">
    <BScroll
      :pullDown="{
        threshold: 50,
        stop: 30
      }"
      :bounce="true">
      <div class="swiper-container Swiper_nav">
        <div class="swiper-wrapper">
          <div 
            v-for="(item,i) in topBannerData" 
            :key="i"
            class="swiper-slide"
          >
            <img 
              @click="navigatorTo(item.url)"
              :src="item.img" 
              alt="item.img">
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
      </div>

      <template #pullUp>
        已无更多数据
      </template>
    </BScroll>
  </div>
</template>

<script>
import BScroll from "@/components/common/scroll/BScroll.vue";
import Swiper from 'swiper'
import '../../node_modules/swiper/js/swiper.min.js'
import '../../node_modules/swiper/css/swiper.min.css'
import HeadLine from '@/components/common/HeadLine.vue'
import { setTimeout } from 'timers';
export default {
  name: 'Shopping',
  components: {HeadLine,BScroll},
  data(){
    return {
      url: require('@/assets/img/shopping/swiper-nav.png'),
      topBannerData: [
        {
          url: '/',
          img: require("@/assets/img/shopping/swiper-nav.png")
        },
        {
          url: '/',
          img: require("@/assets/img/shopping/swiper-nav.png")
        },
        {
          url: '/',
          img: require("@/assets/img/shopping/swiper-nav.png")
        },
        {
          url: '/',
          img: require("@/assets/img/shopping/swiper-nav.png")
        },
        {
          url: '/',
          img: require("@/assets/img/shopping/swiper-nav.png")
        },
        {
          url: '/',
          img: require("@/assets/img/shopping/swiper-nav.png")
        },
      ],
      vanGridData: [
        {
          url: "/",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
        {
          url: "/",
          img: "https://img.yzcdn.cn/vant/apple-3.jpg",
          name: "厨房电器"
        },
      ],
      spItemData: [
        {
          url: "/",
          img:  require("@/assets/img/shopping/shopping.png"),
          name: "厨房电器"
        },
        {
          url: "/",
          img:  require("@/assets/img/shopping/shopping.png"),
          name: "厨房电器"
        },
        {
          url: "/",
          img:  require("@/assets/img/shopping/shopping.png"),
          name: "厨房电器"
        },
      ],
      spBotData: [
        [{
          url: "/",
          img: require("@/assets/img/shopping/bottom-shopping.png"),
          text: "万和热水器万和热水器万和热水器万和热水器万和热水器万和热水器万和",
          coin: "1899.00"
        },
        {
          url: "/",
          img: require("@/assets/img/shopping/bottom-shopping.png"),
          text: "万和热水器万和热水器万和热水器万和热水器万和热水器万和热水器万和",
          coin: "1899.00"
        },
        {
          url: "/",
          img: require("@/assets/img/shopping/bottom-shopping.png"),
          text: "万和热水器万和热水器万和热水器万和热水器万和热水器万和热水器万和",
          coin: "1899.00"
        }],
        [{
          url: "/",
          img: require("@/assets/img/shopping/bottom-shopping.png"),
          text: "万和热水器万和热水器万和热水器万和热水器万和热水器万和热水器万和",
          coin: "1899.00"
        },
        {
          url: "/",
          img: require("@/assets/img/shopping/bottom-shopping.png"),
          text: "万和热水器万和热水器万和热水器万和热水器万和热水器万和热水器万和",
          coin: "1899.00"
        },
        {
          url: "/",
          img: require("@/assets/img/shopping/bottom-shopping.png"),
          text: "万和热水器万和热水器万和热水器万和热水器万和热水器万和热水器万和",
          coin: "1899.00"
        }],
      ]
    }
  },
  methods: {
    navigatorTo(url){
      console.log(url)
      this.$router.push(url);
    },
    initSwiper(){ 
      const Swiper_nav = new Swiper('.Swiper_nav',{
        loop:true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
          },
      });
      const Swiper_Bot = new Swiper('.Swiper_Bot',{
        loop:true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
          },
      });
    }
  },
  created(){
  },
  mounted(){
    this.initSwiper()
  }
}
</script>

<style scoped lang="less">
.Shopping{
  overflow: hidden;
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
