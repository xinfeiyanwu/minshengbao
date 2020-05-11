import axios from 'axios'

function require (config) {
    const instance = axios.create(config)

    //请求拦截器
    instance.interceptors.request.use(
        config => {
            return config;
        },
        err => {
            console.log(err);
        }
    )

    //响应拦截器
    instance.interceptors.response.use(
        res => {
            return res.data;
        },
        err => {
            console.log(err);
        }
    )

    return config.url ? instance(config) : instance;
}

export default require;