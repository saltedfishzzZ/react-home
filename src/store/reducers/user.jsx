import * as types from '../constants'
import {getToken} from '../../utils/auth'

const initUserInfo = {
  avatar: '',
  nickName: '',
  merchantId: '',
  token: getToken()
}

export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.SET_USER:
      const user = action.user
      return {
        ...state,
        avatar: user.avatar,
        nickName: user.nickName,
        merchantId: user.merchantId,
        token: user.token
      };
    case types.SET_USER_INFO:
      return {
        ...state,
        avatar: action.userInfo.avatar,
        nickName: action.userInfo.nickName,
        merchantId: action.userInfo.merchantId
      }
    default:
      return state;
  }
}
