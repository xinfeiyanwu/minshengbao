import Mock from 'mockjs'
Mock.setup({
    timeout: '500-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})

const spBotData = [
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

export default Mock.mock('/shopping/spBotData','get',spBotData)