import * as types from "../constants"
import { getUserInfo as getUserInfoApi } from '../../api/user'

export const getUserInfo = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    getUserInfoApi()
      .then((response) => {
        const { data } = response;
        if (data.code === 200) {
          const userInfo = data.data;
          dispatch(setUserInfo(userInfo));
          resolve(response);
        } else {
          const msg = data.message;
          reject(msg);
        }
      })
      .catch(error => { reject(error) })
  })
}

export const setUser = (user) => ({ type: types.SET_USER, user })
export const setUserInfo = (userInfo) => ({ type: types.SET_USER_INFO, userInfo })