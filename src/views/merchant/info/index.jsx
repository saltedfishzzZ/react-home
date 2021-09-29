import React from 'react'
import {Descriptions, Badge, Button, Modal } from 'antd'
import { connect } from "react-redux";
import './index.less'
import { getMerchantInfo } from "../../../store/actions";

function MerchantInfo(props) {
  const { user, merchantInfo } = props

  // 跳转编辑页面
  const edit = () => {
    props.history.push('/merchant/edit')
  }

  React.useEffect(() => {
    if (user.merchantId && !merchantInfo.name) {
      props.getMerchantInfo(user.merchantId)
    }
    return () => {}
  }, [])

  return (
    <Descriptions
      className="description"
      title="商户信息展示"
      bordered
      size="middle"
      extra={<Button className="edit-button" type="primary" onClick={() => edit() }>编辑</Button>}>
      <Descriptions.Item label="商户名" span={3}>{merchantInfo.name}</Descriptions.Item>
      <Descriptions.Item label="商户地址" span={3}>{merchantInfo.address}</Descriptions.Item>
      <Descriptions.Item label="商户联系方式" span={3}>{merchantInfo.telephone}</Descriptions.Item>
      <Descriptions.Item label="营业时间" span={3}>
        {merchantInfo.businessStartTime} - {merchantInfo.businessEndTime}
      </Descriptions.Item>
      <Descriptions.Item label="公告" span={3}>{merchantInfo.announcement}</Descriptions.Item>
    </Descriptions>
  )
}

export default connect(
    state => ({ user: state.user, merchantInfo: state.merchantInfo}),
  { getMerchantInfo }
)(MerchantInfo)
