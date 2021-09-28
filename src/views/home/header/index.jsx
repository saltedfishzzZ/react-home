import React from 'react'
import { connect } from 'react-redux'
import './index.less'

function HeaderLayout(props) {
    const username = props.user.nickName
    const title = props.headTitle.headTitle
    return (
        <div className="header">
            <div className="header-top">
                <span>欢迎, { username }</span>
                <span>{ title }</span>
            </div>
        </div>
    )
}

export default connect(
    state => ({ headTitle: state.headTitle, user: state.user })
)(HeaderLayout)
