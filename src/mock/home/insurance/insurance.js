import Mock from 'mockjs'
const insuranceData = {
    GasRInsurance: {
        name: '燃气险',
        item: [
            {
                img: '',
                h5: '居民燃气险',
                p: '居民燃气险',
                Coin: 100.0,
                company: '中国太平洋人寿保险'
            },
            {
                img: '',
                h5: '居民燃气险',
                p: '居民燃气险',
                Coin: 100.0,
                company: '中国太平洋人寿保险'
            }
        ]
    },
    HPInsurance: {
        name: '家庭财产险',
        item: [
            {
                img: '',
                h5: '家庭财产险',
                p: '家庭财产险',
                Coin: 100.0,
                company: '中国太平洋人寿保险'
            },
        ]
    },
    lifeInsurance: {
        name: '家庭财产险',
        item: [
            {
                img: '',
                h5: '家庭财产险',
                p: '家庭财产险',
                Coin: 100.0,
                company: '中国太平洋人寿保险'
            },
        ]
    },
}
export default Mock.mock('/insurance', 'get', insuranceData)