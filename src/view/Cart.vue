<template>
  <div class="Cart">
    <div class="Cart-head">
      购物车
    </div>
    <div class="Cart-body">
      <img src="@/assets/img/cart/emptyCart.png" alt="emptyCart">
      <h4>购物车空了，再去逛逛看呀</h4>
      <p>去挑一些中意的商品吧~</p>
      <router-link tag="div" to="/Shopping" class="stroll">随便逛逛</router-link>
    </div>
    <HeadLine>猜你喜欢</HeadLine>
  </div>
</template>

<script>
import HeadLine from '@/components/common/HeadLine.vue'
export default {
  name: 'Cart',
  components: {HeadLine},
  data(){
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.Cart{
  height: 100%;
  background-color: #ebebeb;
  overflow-y: scroll;
  .Cart-head{
    padding: 30px 0;
    color: #fff;
    background-color: #f6741c;
    margin-bottom: 28px;
    text-align: center;
  }
  img{
    width: 200px;
    margin: 0 auto;
  }
  h4{
    padding: 20px;
  }
  p{
    color: #ccc;
  }
  .stroll{
    display: inline-block;
    padding: 4px 7px;
    border-radius: 13px;
    background-color: #fff;
    color: #f9582e;
    margin: 10px auto;
    border: 1px solid #ccc;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
