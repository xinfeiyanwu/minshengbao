import request from '@/api/request'

export function NavSwiper () {
    return request({url: '/home/NavSwiper'});
}

export function ActiveSwiper () {
    return request({url: '/home/ActiveSwiper'});
}

export function STList () {
    return request({url: '/home/STList'});
}