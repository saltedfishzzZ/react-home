import * as types from '../constants'

const initHeadTitle = {headTitle: '首页' };

export const headTitle = (state=initHeadTitle, action) => {
    switch (action.type) {
        case types.SET_HEAD_TITLE:
            return { headTitle: action.data }
        default:
            return state
    }
}
