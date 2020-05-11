import Mock from 'mockjs'
Mock.setup({
    timeout: '500-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})

const STList = [
    '1民生头条民生头条民生头条民生头条民生头条',
    '2民生头条民生头条民生头条民生头条民生头条民生头条',
    '3民生头条民生头条民生头条民生头条民生头条民生头条',
    '4民生头条民生头条民生头条民生头条民生头条民生头条',
]

export default Mock.mock('/home/STList', 'get',STList);