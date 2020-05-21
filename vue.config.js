module.exports= {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'asset',
    devServer: {
        open: process.platform === 'darwin',
        host: '192.168.101.3',
        port: 8080,
        https: false,
        hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        proxy: {
            '/api': {
                target: "http://app.rmsdmedia.com",
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            },
            '/foo': {
                target: '<other_url>'
            }
        }, // string | Object
        before: app => {}
    },
    // css: {
    //     loaderOptions: {
    //         postcss: {
    //         plugins: [
    //             require("postcss-px-to-viewport")({
    //             unitToConvert: "px",
    //             viewportWidth: 750,   // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
    //             viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
    //             unitPrecision: 3,
    //             propList: [
    //                 "*"
    //             ],
    //             viewportUnit: "vw",
    //             fontViewportUnit: "vw",
    //             selectorBlackList: [],
    //             minPixelValue: 1,
    //             mediaQuery: false,
    //             replace: true,
    //             exclude: /(\/|\\)(node_modules)(\/|\\)/,
    //             })
    //         ]
    //         }
    //     }
    // }
}