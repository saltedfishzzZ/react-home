import { loginApi } from '../../api/login'
import { setToken } from '../../utils/auth'
import { setUser } from './user'

export const login = (username, password) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            loginApi({ username: username.trim(), password: password })
                .then((response) => {
                    const { data } = response;
                    if (data.code === 200) {
                        const user = data.data;
                        dispatch(setUser(user));
                        setToken(user.token);
                        resolve(response);
                    } else {
                        const msg = data.message;
                        reject(msg);
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
}
