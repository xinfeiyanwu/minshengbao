import Mock from 'mockjs'
Mock.setup({
    timeout: '500-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})

const shoppingTopData = [
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
  ]

export default Mock.mock('/shopping/shoppingTop','get',shoppingTopData)