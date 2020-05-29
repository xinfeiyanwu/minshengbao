<template>
  <div class="Home">
    <!-- 头部导航 -->
    <NavBar>
      <template #left-nav>
        <div class="left-cont">
         <div class="address">
           海口
           <van-icon name="arrow-down" />
         </div>
        </div>
      </template>

      <template #default>
        民生保
      </template>

      <template #right-nav>
        <div class="right-cont">
         <van-icon class="iconfont icon-sweep" @click="selModule(true)"/>
        </div>
      </template>
    </NavBar>

    <BScroll 
      :pullDown="{
        threshold: 50,
        stop: 30
      }" 
      :bounce="{bottom: false}"
      pullDownEvName="pullDownReq"
      @pullDownReq="requireData(false)"
      ref="bs">
      
      <div class="swiper-container Swiper_nav">
        <div class="swiper-wrapper">
          <div v-for="(item,i) in navSwiper" :key="i" class="swiper-slide">
            <router-link to="/Self">
              <img :src="item.img" :alt="item.img" />
            </router-link>
          </div>
        </div>
      </div>

      <van-grid :column-num="5" :border="false">
        <template v-for="(item,i) in allTools">
          <van-grid-item
            :key="i"
            v-if="i!==1&&i!==3&&i!==6"
            @click="navigatorTo(item.url)"
            :icon="item.imgurl"
            :text="item.name"
          />
          <van-grid-item
            :key="i"
            class="van-grid-24"
            v-else-if="i===1 || i===6"
            @click="navigatorTo(item.url)"
            :icon="item.imgurl"
            :text="item.name"
          />
          <van-grid-item
            class="van-grid-16"
            :key="i"
            v-else-if="i===3"
            @click="navigatorTo(item.url)"
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
        <img src="@/assets/img/home/minshengtoutiao.png" alt="minshengtoutiao" />
        <div class="scrollText">
          <div class="hot">热点</div>
          <ScrollText :STList="STList"/>
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
                <img :src="item.img" :alt="item.img" />
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="top-title">
        <h4>热门推荐</h4>
        <template v-for="(item, i) in recommend">
          <div class="recommend" :key="i" @click="showSidePage(item.url)">
            <van-skeleton title avatar :row="3" :loading="loading"> 
              <van-image :src="item.imgurl" alt="recommend" />
              <div class="content">
                <h5>{{item.h5}}</h5>
                <p class="van-multi-ellipsis--l2">{{item.p}}</p>
              </div>
            </van-skeleton>
          </div>
        </template>
      </div>

      <div class="rainbowText">
        <div class="rainbowBox">专业专注，用心做好每一次服务</div>
      </div>
    </BScroll>

    <!-- 二维码扫描 -->
    <Scan v-if="scanState"/>

    <!-- 二维码弹窗 -->
    <Dialog v-if="show" @showHandle="selModule">
      <ul>
        <li @click="scanHandle"><van-icon class="iconfont icon-sweep" /> 扫一扫</li>
        <li><van-icon class="iconfont icon-bell-regular" /> 消息</li>
      </ul>
    </Dialog>
    
    <SidePage 
      v-if="SidePage" 
      :SidePageShow="SidePageShow" 
      :nav="{
        title: '保险业务',
        rightWord: '保单查询'
      }"
      @resetShowHandle="SidePageShow = false">
      fsdfsdf
      </SidePage>
  </div>
</template>

<script>
import {ActiveSwiper,NavSwiper,STList} from '@/api/home/home.js'
import ScrollText from "@/components/common/scroll/ScrollText.vue";
import BScroll from "@/components/common/scroll/BScroll.vue";
import NavBar from "@/components/common/bar/NavBar.vue"
import Scan from "@/components/common/plus/Scan.vue";
import SidePage from "@/components/common/sidePage/SidePage.vue";
import Dialog from "@/components/common/dialog/Dialog.vue";
import Swiper from "swiper";
import "../../node_modules/swiper/css/swiper.min.css";
import "../../node_modules/swiper/js/swiper.min.js";
import {navigatorTo} from '@/unit/unit.js'
import { mapState } from 'vuex';
export default {
  name: "Home",
  components: { ScrollText,BScroll,NavBar,Scan,Dialog,SidePage },
  data() {
    return {
      navSwiper: [],
      ActiveSwiper: [],
      STList: [],
      //全部工具
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
      //相同工具
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
      //推荐
      recommend: [
        {
          url: "/Self",
          imgurl: require("../assets/img/home/recommend/recommend1.png"),
          h5: "居民保险",
          p: "安全无小事，保险保平安",
        },
        {
          url: "/Cart",
          imgurl: require("../assets/img/home/recommend/recommend2.png"),
          h5: "家具维修",
          p: "家电维修 修的放心，用的舒心！以最快的速度给您最好的服务",
        },
        {
          url: "/Cart",
          imgurl: require("../assets/img/home/recommend/recommend3.png"),
          h5: "店家清洗",
          p: "高温消毒，杜绝尘螨！明码标价给您最优惠的选择",
        }
      ],
      //跳转路由函数,
      navigatorTo: navigatorTo, 
      //骨屏架显示 
      loading: true,  
      //二维码弹窗
      show: false,
      SidePage: false,
      SidePageShow: true
    };
  },
  methods: {
    scanHandle(){
      //隐藏scan选择框
      this.selModule(false);
      this.scanState ? this.$store.commit('hiddenScan') : this.$store.commit('showScan')
    },
    selModule(bool){
      this.show = bool;
      // console.log(bool)
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
    requireData (auto) {
      //两个swiper的数据交互完后再去初始化，避免swiper滚动失败
      Promise.all([
        NavSwiper(),
        ActiveSwiper(),
        STList()
      ]).then(res => {
        console.log(res);
        [this.navSwiper,this.ActiveSwiper,this.STList] = res;
        //区别手动和自动请求
        if(auto){
          this.$nextTick(() => {
            this.initSwiper();
            this.loading = false;
          })
        }
        else{
          this.$refs.bs.bs.finishPullDown();
          this.loading = false;
          console.log('finishPullDown')
        }
      });
    },
    showSidePage (url) {
      if(!this.SidePage) return this.SidePage = true; 
      this.SidePageShow = true;
      console.log(this.SidePageShow)
    }
  },
  computed: mapState({
    scanState: (state) => state.conmon.scanState
  }),
  created () {
    this.requireData(true);
  },
};
</script>

<style lang="less" scoped>
.Home {
  background-color: #ebebeb;
  overflow: hidden;
  .nav{
    .left-nav{
      .address{
        background: #1e1e1e80;
        padding: 4px;
        border-radius: 4px;
      }
    }
    .right-nav{
      .icon-sweep {
        padding: 6px;
        font-size: 22px;
        background: #22202057;
        border-radius: 50%;
        color: #eee7e7;
      }
    }
  }
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
  .van-grid-24 {
    flex-basis: 24% !important;
  }
  .van-grid-16 {
    flex-basis: 16% !important;
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
      height: 105px;
      border-bottom: 1px solid #ccc;
      .van-image {
        width: 110px;
      }
      .content {
        width: calc(100% - 110px);
        padding-left: 20px;
        text-align: left;
        h5 {
          padding-bottom: 11px;
          font-size: 18px;
        }
        p {
          line-height: 32px;
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

  .Dialog{
    .Dialog-cont{
      ul li{
        text-align: left;
      }
    }
  }
}
</style>

