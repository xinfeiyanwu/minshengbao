import Mock from 'mockjs'
Mock.setup({
    timeout: '500-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})

const Ramdom = Mock.Random;


export default Mock.mock('/home/STList', 'get',()=>{
    const STList = [
        '1'+Ramdom.csentence(8,20),
        '2'+Ramdom.csentence(8,20),
        '3'+Ramdom.csentence(8,20),
        '4'+Ramdom.csentence(8,20),
    ]

    return STList;
});