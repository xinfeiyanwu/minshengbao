import Mock from 'mockjs'
Mock.setup({
    timeout: '200-600' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})

const navSwiper = [
    {img: require('@/assets/img/home/banner/banner.png')},
    {img: require('@/assets/img/home/banner/banner.png')},
    {img: require('@/assets/img/home/banner/banner.png')},
    {img: require('@/assets/img/home/banner/banner.png')},
    {img: require('@/assets/img/home/banner/banner.png')},
    {img: require('@/assets/img/home/banner/banner.png')},
]

export default Mock.mock('/NavSwiper', 'get',navSwiper);