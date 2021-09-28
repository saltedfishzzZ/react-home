import React from 'react'
import logo from '../../../assets/images/logo.svg'
import './index.less'

export default function Logo() {
    return (
        <div className="logo-container">
            <img src={logo} className="logo" alt="logo" />
            <h4 className="title">点餐管理系统</h4>
        </div>
    )
}
