import Mock from 'mockjs'
Mock.setup({
    timeout: '500-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})

const ActiveSwiper = [
    {img: require('@/assets/img/home/active/carousel.png')},
    {img: require('@/assets/img/home/active/carousel.png')},
    {img: require('@/assets/img/home/active/carousel.png')},
    {img: require('@/assets/img/home/active/carousel.png')},
    {img: require('@/assets/img/home/active/carousel.png')},
    {img: require('@/assets/img/home/active/carousel.png')},
]

export default Mock.mock('/home/ActiveSwiper', 'get',ActiveSwiper);