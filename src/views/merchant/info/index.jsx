import React from 'react'
import {Descriptions, Badge, Button} from 'antd'
import { connect } from "react-redux";
import './index.less'
import { getMerchantInfo } from '../../../api/merchant'

function MerchantInfo(props) {
  // 定义状态
  const [ merchantInfo, setMerchantInfo ] = React.useState({})

  const merchantId = props.merchantId
  // 调用接口获取数据
  React.useEffect(() => {
    if (merchantId) {
      getMerchantInfo(merchantId)
        .then(data => {
          setMerchantInfo(data.data.data.merchantInfo)
        })
        .catch(error => {});
    }
    return () => {
      setMerchantInfo({})
    }
  }, [ merchantId ])

  return (
    <Descriptions
      className="description"
      title="商户信息展示"
      bordered
      size="middle"
      extra={<Button className="edit-button" type="primary">编辑</Button>}>
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
  state => state.user
)(MerchantInfo)
