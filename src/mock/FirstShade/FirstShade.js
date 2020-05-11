import Mock from 'mockjs'

const FirstShade = require('@/assets/img/FirstShade/FirstShade.jpg');

export default Mock.mock('/FirstShade', 'get',FirstShade);