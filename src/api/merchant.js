import request from "../utils/request";

export function getMerchantInfo(id) {
  return request({
    url: `/api/merchant/${id}`,
    method: 'get'
  })
}