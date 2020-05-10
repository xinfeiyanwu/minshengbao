<template>
  <div class="Home">
    <BScroll 
      :pullDown="{
        threshold: 50,
        stop: 30
      }" 
      :bounce="{bottom: false}"
      EType="pullDownReq"
      @pullDownReq="requireData"
      ref="bs"
    >
      <div class="swiper-container Swiper_nav">
        <div class="swiper-wrapper">
          <div v-for="(item,i) in navSwiper" :key="i" class="swiper-slide">
            <router-link to="/Self">
              <img :src="item.img" :alt="item.img">
            </router-link>
          </div>
        </div>
      </div>

      <van-grid :column-num="5" :border="false">
        <template v-for="(item,i) in allTools">
          <van-grid-item
            :key="i"
            v-if="i!==1&&i!==3"
            @click="navigatorTo(item.url)"
            :icon="item.imgurl"
            :text="item.name"
          />
          <van-grid-item
            :key="i"
            v-else-if="i===1"
            @click="navigatorTo(item.url)"
            style="flex-basis: 24% !important;"
            :icon="item.imgurl"
            :text="item.name"
          />
          <van-grid-item
            :key="i"
            v-else
            @click="navigatorTo(item.url)"
            style="flex-basis: 16% !important;"
            :icon="item.imgurl"
            :text="item.name"
          />
        </template>

        <div class="commonTools">
          <van-grid :border="false">
            <van-grid-item
              v-for="(item, i) in commonTools"
              @click="navigatorTo(item.url)"
              :key="i"
              :icon="item.imgurl"
              :text="item.name"
            />
          </van-grid>
        </div>
      </van-grid>

      <div class="frontPage">
        <img src="@/assets/img/home/minshengtoutiao.png" alt="minshengtoutiao">
        <div class="scrollText">
          <div class="hot">热点</div>
          <ScrollText />
        </div>
        <div class="more">
          <router-link to="/Self">更多</router-link>
        </div>
      </div>

      <div class="top-title">
        <h4>专题活动</h4>

        <div class="swiper-container Swiper_active">
          <div class="swiper-wrapper">
            <div v-for="(item,i) in ActiveSwiper" :key="i" class="swiper-slide">
              <router-link to="/Cart">
                <img :src="item.img" :alt="item.img">
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="top-title">
        <h4>热门推荐</h4>

        <template v-for="(item, i) in recommend">
          <div class="recommend" :key="i" @click="navigatorTo(item.url)">
            <img :src="item.imgurl" alt="recommend1">
            <div class="content">
              <h5>{{item.h5}}</h5>
              <p>{{item.p1}}</p>
              <p>{{item.p2}}</p>
            </div>
          </div>
        </template>
      </div>

      <div class="rainbowText">
        <div class="rainbowBox">专业专注，用心做好每一次服务</div>
      </div>
    </BScroll>
  </div>
</template>

<script>
import {ActiveSwiper,NavSwiper} from '@/api/home/home.js'
import ScrollText from "@/components/common/scroll/ScrollText.vue";
import BScroll from "@/components/common/scroll/BScroll.vue";
import NavBar from "@/components/common/bar/NavBar.vue"
import Swiper from "swiper";
import "../../node_modules/swiper/css/swiper.min.css";
import "../../node_modules/swiper/js/swiper.min.js";
export default {
  name: "Home",
  components: { ScrollText,BScroll,NavBar },
  data() {
    return {
      navSwiper: [],
      ActiveSwiper: [],
      allTools: [
        {
          url: "/Self",
          imgurl: require("../assets/img/home/allTools/insurance.png"),
          name: "保险业务"
        },
        {
          url: "/Self",
          imgurl: require("../assets/img/home/allTools/fuelGas.png"),
          name: "居民燃气服务"
        },
        {
          url: "/Self",
          imgurl: require("../assets/img/home/allTools/gongshang.png"),
          name: "工商报装"
        },
        {
          url: "/Self",
          imgurl: require("../assets/img/home/allTools/electrocar.png"),
          name: "电动车"
        },
        {
          url: "/Self",
          imgurl: require("../assets/img/home/allTools/housekeeping.png"),
          name: "家政保洁"
        },
        {
          url: "/Self",
          imgurl: require("../assets/img/home/allTools/jiadianqingxi.png"),
          name: "家电清洗"
        },
        {
          url: "/Self",
          imgurl: require("../assets/img/home/allTools/maintain.png"),
          name: "家居维修"
        },
        {
          url: "/Self",
          imgurl: require("../assets/img/home/allTools/all.png"),
          name: "全部"
        }
      ],
      commonTools: [
        {
          url: "/Self",
          imgurl: require("../assets/img/home/commonTools/toolIcon1.png"),
          name: "民生水保"
        },
        {
          url: "/Self",
          imgurl: require("../assets/img/home/commonTools/toolIcon2.png"),
          name: "液气化"
        },
        {
          url: "/Self",
          imgurl: require("../assets/img/home/commonTools/toolIcon3.png"),
          name: "燃气抄表"
        },
        {
          url: "/Self",
          imgurl: require("../assets/img/home/commonTools/toolIcon4.png"),
          name: "燃气缴费"
        }
      ],
      recommend: [
        {
          url: "/Self",
          imgurl: require("../assets/img/home/recommend/recommend1.png"),
          h5: "民生水保",
          p1: "安全无小事，保险保平安",
          p2: "安全无小事，保险保平安"
        },
        {
          url: "/Cart",
          imgurl: require("../assets/img/home/recommend/recommend1.png"),
          h5: "民生水保",
          p1: "安全无小事，保险保平安",
          p2: "安全无小事，保险保平安"
        }
      ],
    };
  },
  methods: {
    navigatorTo (url) {
      console.log(url);
      this.$router.push(url);
    },
    initSwiper () {
      const Swiper_nav = new Swiper(".Swiper_nav", {
        loop: true,
        observer: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      });
      const Swiper_active = new Swiper(".Swiper_active", {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true,
        observer: true,
        centeredSlides: true,
        slidesPerView: 2,
        onInit: function(swiper) {
          //回调函数，初始化后执行。
          swiper.slides[2].className = "swiper-slide swiper-slide-active"; //第一次打开不要动画
        }
      });
    },
    requireData(){
      //两个swiper的数据交互完后再去初始化，避免swiper滚动失败
      Promise.all([NavSwiper(),ActiveSwiper()]).then(res => {
        console.log(res);
        this.navSwiper = res[0];
        this.ActiveSwiper = res[1];
        this.$refs.bs.bs.finishPullDown();
        this.$nextTick(()=>{
          this.initSwiper();
        })
      });
    }
  },
  created () {
    this.requireData();
  },
  mounted(){
  }
};
</script>

<style lang="less" scoped>
.Home {
  background-color: #ebebeb;
  overflow: hidden;
  .Swiper_nav {
    height: 200px;
  }

  .van-grid {
    position: relative;
    padding-top: 54px;
    background-color: #fff;
    overflow: initial;
    .commonTools {
      margin: 0 21px;
      position: absolute;
      top: -40px;
      width: calc(100% - 42px);
      background-color: #fff;
      box-shadow: 0 0 3px #cec7c7;
      z-index: 99;
      border-radius: 10px;
      overflow: hidden;
      .van-grid {
        padding: 0;
      }
    }
  }

  .frontPage {
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    padding: 16px;
    height: 20px;
    font-weight: 600;
    font-size: 14px;
    background-color: #fff;

    img {
      width: 72px;
    }

    .scrollText {
      display: flex;
      width: 200px;
      .hot {
        width: 50px;
        background-color: #fe0000;
        color: #fff;
        font-weight: normal;
      }
    }

    .more {
      border-left: 2px solid #000;
      padding-left: 12px;
      line-height: 20px;
      a {
        color: #000;
      }
    }
  }

  .top-title {
    background-color: #fff;
    h4 {
      padding: 16px 0 16px 10px;
      text-align: left;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
    }

    .Swiper_active {
      padding: 20px 0;
      margin-bottom: 10px;
      .swiper-slide {
        -webkit-transition: transform 0.5s;
        -moz-transition: transform 0.5s;
        -ms-transition: transform 0.5s;
        -o-transition: transform 0.5s;
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
      }
      .swiper-slide-active,
      .swiper-slide-duplicate-active {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }

    .recommend {
      display: flex;
      padding: 20px 0 20px 10px;
      border-bottom: 1px solid #ccc;
      img {
        width: 110px;
      }
      .content {
        text-align: left;
        padding-left: 20px;
        h5,
        p {
          padding-bottom: 11px;
        }
        h5 {
          font-size: 18px;
        }
      }
    }
  }

  .rainbowText {
    .rainbowBox {
      padding: 20px;
      margin: 0 auto;
      width: 230px;
      background-color: #ebebeb;
      background: linear-gradient(45deg, #fa5858, #da5757, #c5c51c, #7b7b3d);
      animation: move 0.6s infinite;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -ms-background-clip: text;
      color: transparent;

      @keyframes move {
        0% {
          background-position-x: 0px;
        }
        100% {
          background-position-x: 230px;
        }
      }
    }
  }

  .uploadtext{
    height: 30px;
  }
}
</style>

