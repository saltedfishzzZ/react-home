import { getMerchantInfoApi } from "../../api/merchant";
import * as types from "../constants"

export const getMerchantInfo = (id) => {
  return (dispatch) => {
    return new Promise(((resolve, reject) => {
      getMerchantInfoApi(id)
        .then(response => {
          const { data } = response
          if (data.code === 200) {
            dispatch(setMerchantInfo(data.data.merchantInfo))
            resolve(response)
          }
        })
        .catch(error => {
          reject(error)
        })
    }))
  }
}

export const setMerchantInfo = (merchantInfo) => ({ type:types.SET_MERCHANT_INFO, merchantInfo })