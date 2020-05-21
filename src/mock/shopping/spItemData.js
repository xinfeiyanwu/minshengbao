import Mock from 'mockjs'
Mock.setup({
    timeout: '500-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})

const spItemData = [
    {
      url: "/Home",
      img:  require("@/assets/img/shopping/shopping.png"),
      name: "厨房电器"
    },
    {
      url: "/Home",
      img:  require("@/assets/img/shopping/shopping.png"),
      name: "厨房电器"
    },
    {
      url: "/Home",
      img:  require("@/assets/img/shopping/shopping.png"),
      name: "厨房电器"
    },
  ]

export default Mock.mock('/shopping/spItemData','get',spItemData)