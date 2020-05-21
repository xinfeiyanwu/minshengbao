<template>
  <div class="Self">
    <!-- 头部导航 -->
    <NavBar>
      <template #default>
        我的
      </template>
      <template #right-nav>
        <van-icon size="24" class="iconfont icon-uniE98A"></van-icon>
        <van-icon size="26" class="iconfont icon-bell-regular"></van-icon>
        <van-icon size="26" class="iconfont icon-xitong"></van-icon>
      </template>
    </NavBar>

    <BScroll ref="bs">
      <div class="header"></div>

      <div class="user-module">
        <router-link tag="div" to="/" class="user-pic">
          <img src="@/assets/img/self/user-pic.png" alt="user-pic" >
        </router-link>
        <div class="user-info">
          <div class="user-id">177****8186</div>
          <div class="member-point">会员积分: 15</div>
        </div>
        <div class="shareBtn">分享有礼</div>

        <div class="user-facility">
          <div class="facility-item">
            <div class="num">0.0</div>
            <div class="name">我的红包</div>
          </div>
          <div class="facility-item">
            <div class="num">0</div>
            <div class="name">红包卡券</div>
          </div>
          <div class="facility-item">
            <div class="num">0</div>
            <div class="name">我的收藏</div>
          </div>
          <div class="facility-item">
            <div class="num">1</div>
            <div class="name">我的足迹</div>
          </div>
        </div>
        <div class="line"></div>
      </div>

      <div class="sign-in" @click="navigatorTo('/')">
        <div class="left-text">
          <h4>每日签到</h4>
          <p>积分兑最高20元燃气费</p>
          <button>马上参与</button>
        </div>
        <img src="@/assets/img/self/signIn.png" alt="signIn">
      </div>

      <div class="cell-cont">
        <van-cell-group :border="false">
          <van-cell 
            :url="item.url"
            v-for="(item,i) in cellSource"
            :key="i"
            :icon="item.icon" 
            size="large"  
            :title="item.title" 
            is-link 
            arrow-direction="down" />
        </van-cell-group>
      </div>
    </BScroll>
  </div>
</template>

<script>
import BScroll from "@/components/common/scroll/BScroll.vue";
import NavBar from '@/components/common/bar/NavBar.vue'
import {navigatorTo} from '@/unit/unit.js'
export default {
  name: 'Self',
  components: {BScroll,NavBar},
  data(){
    return {
      cellSource: [
        {
          url: '/',
          icon: require('@/assets/img/self/cell/mallOrder.png'),
          title: '商城订单',
        },
        {
          url: '/',
          icon: require('@/assets/img/self/cell/MainOrder.png'),
          title: '维修订单',
        },
        {
          url: '/',
          icon: require('@/assets/img/self/cell/gasOrder.png'),
          title: '燃气工单',
        },
        {
          url: '/',
          icon: require('@/assets/img/self/cell/invoice.png'),
          title: '发票申请',
        },
        {
          url: '/',
          icon: require('@/assets/img/self/cell/policyQuery.png'),
          title: '保单查询',
        },
        {
          url: '/',
          icon: require('@/assets/img/self/cell/adress.png'),
          title: '地址管理',
        },
        {
          url: '/',
          icon: require('@/assets/img/self/cell/chat.png'),
          title: '咨询建议',
        },
      ],
      navigatorTo: navigatorTo  //跳转路由函数
    }
  },
  methods: {
  },
}
</script>


<style scoped lang="less">
.Self{
  background-color: #ebebeb;
  .nav{
    i{padding-right:10px;}
  }

  .header{
    height: 100px;
    background: #fd9631;
  }
  .user-module{
    margin: 0 10px;
    position: absolute;
    top: 50px;
    width: calc(100% - 20px);
    background-color: #fff;
    border-radius: 10px;
    .user-pic{
      position: absolute;
      top: -8px;
      left: 16px;
      box-shadow: 0 0 0 5px #ffffff5c;
      border-radius: 50%;
      img{
        width: 75px;
        height: 75px;
        border-radius: 50%;
      }
    }
    .user-info{
      padding-left: 104px;    
      text-align: left;
      .user-id{
        padding: 12px 0;
        color: #eb702c;
      }
      .member-point{
        color: #8e8e8e;
      }
    }
    .shareBtn{
      position: absolute;
      top: 12px;
      right: 10px;    
      padding: 5px 8px 6px;
      background-color: #e33f3e;
      color: #fff;
      border-radius: 22px;
      font-size: 13px;
    }
    .user-facility{
      display: flex;
      padding-top: 20px;
        font-weight: 600;
      .facility-item{
        flex-basis: 25%;
        .name{
          padding: 10px 0 20px;
        }
      }
    }
    .line{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: #f39323;
      border-radius: 0 0 12px 12px;
    }
  }
  .sign-in{
    display: flex;
    align-items: center;
    justify-content: space-between;    
    margin-top: 116px;
    background-color: #fff;
    padding-left: 14px;
    .left-text{
      padding: 20px 0;
      text-align: left;
      p{
        color: #383838;
        padding: 8px 0 16px 0;
      }
      button{
        padding: 6px;
        border: none;
        background-color: #e04237;
        color: #fff;
        border-radius: 8px;
        font-size: 14px;
      }
    }
    img{
      width: 130px;
    }
  }
  .cell-cont{
    margin-bottom: 30px;
    padding-top: 10px;
    .van-cell-group{
      .van-cell{
        border-bottom: 1px solid #ccc;
        .van-cell__title{
          text-align: left;
        }
        .van-icon__image{
          width: 24px;
          height: 24px;
        }
      }
      .van-cell:not(:last-child)::after{
        border-bottom: 0;
      }
    }
  }
}
</style>
