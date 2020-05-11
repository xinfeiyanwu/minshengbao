import request from '../request'

export function shoppingTopReq(){
    return request({
        url: '/shopping/shoppingTop'
    })
}
export function spItemDataReq(){
    return request({
        url: '/shopping/spItemData'
    })
}
export function spBotDataReq(){
    return request({
        url: '/shopping/spBotData'
    })
}