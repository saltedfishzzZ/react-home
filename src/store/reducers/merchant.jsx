import * as types from '../constants'

const initMerchantInfo = {
  name: '',
  address: '',
  telephone: '',
  announcement: '',
  businessStartTime: '',
  businessEndTime: ''
}

export const merchantInfo = (state=initMerchantInfo, actions) => {
  switch (actions.type) {
    case types.SET_MERCHANT_INFO:
      return {
        ...state,
        ...actions.merchantInfo
      }
    default:
      return state
  }
}
