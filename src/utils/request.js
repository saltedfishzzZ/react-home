import axios from 'axios';
import { message } from 'antd'
import store from '../store'
import { getToken } from '../utils/auth'

// axios实例
const service = axios.create({
    baseUrl: 'http://localhost',
    timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 发送请求前
        if (store.getState().user.token) {
            // 让每个请求都携带token
            config.headers.token = getToken()
        }
        return config;
    },
    error => {
        console.log(error);
        Promise.reject(error);
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 200) {
            message.error({ content: res.message, duration: 2 })
        }
        return response
    },
    error => {
        console.log(error)
        return Promise.reject(error);
    }
)

export default service;