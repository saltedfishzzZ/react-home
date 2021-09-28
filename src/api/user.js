import request from '../utils/request';

export function getUserInfo() {
    return request({
        url: '/api/getUserInfo',
        method: 'get'
    })
}
