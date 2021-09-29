import request from "../utils/request";

export function getMerchantInfoApi(id) {
  return request({
    url: `/api/merchant/${id}`,
    method: 'get'
  })
}