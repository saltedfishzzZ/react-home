import React from 'react'
import {connect} from "react-redux";
import {Card, Form, Input, Button, TimePicker, message} from 'antd'
import moment from 'moment'
import {editMerchantInfo} from "../../../api/merchant";

function EditMerchantInfo(props) {
  const layout = {
    labelCol: {span: 4},
    wrapperCol: {span: 20},
  }
  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: '${label}项为必输入项',
  }

  // 后端传过来的时间进行处理
  const businessStartTime = props.businessStartTime + ':00'
  const businessEndTime = props.businessEndTime + ':00'

  const submitForm = (values) => {
    const orderMerchantDTO = {
      ...values.orderMerchantDTO,
      // 单独对营业时间进行处理
      businessStartTime: values.orderMerchantDTO.businessStartTime.format('HH:mm:ss').substr(0, 5),
      businessEndTime: values.orderMerchantDTO.businessEndTime.format('HH:mm:ss').substr(0, 5)
    }

    editMerchantInfo(props.id, orderMerchantDTO)
      .then(data => {
        message.info(data.data.message, 1)
          .then(() => {
            props.history.push('/merchant/info')
          })
      })
      .catch(error => {})
  }

  return (
    <Card title="编辑商户信息" bordered={true}>
      <Form {...layout} name="edit-merchant" labelAlign="left" onFinish={submitForm} validateMessages={validateMessages}>
        <Form.Item name={['orderMerchantDTO', 'name']}
                   label="名字"
                   rules={[{required: true}]}
                   tooltip="请输入名字"
                   initialValue={props.name}>
          <Input/>
        </Form.Item>
        <Form.Item name={['orderMerchantDTO', 'address']}
                   label="地址"
                   rules={[{required: true}]}
                   tooltip="请输入地址" initialValue={props.address}>
          <Input/>
        </Form.Item>
        <Form.Item name={['orderMerchantDTO', 'telephone']}
                   label="联系方式"
                   rules={[{required: true}]}
                   tooltip="请输入联系方式" initialValue={props.telephone}>
          <Input/>
        </Form.Item>
        <Form.Item name={['orderMerchantDTO', 'announcement']}
                   label="公告"
                   tooltip="请输入公告" initialValue={props.announcement}>
          <Input.TextArea/>
        </Form.Item>
        <Form.Item name={['orderMerchantDTO', 'businessStartTime']}
                   label="营业开始时间"
                   rules={[{required: true}]} initialValue={moment(businessStartTime, 'HH:mm:ss')}>
          <TimePicker/>
        </Form.Item>
        <Form.Item name={['orderMerchantDTO', 'businessEndTime']}
                   label="营业结束时间"
                   rules={[{required: true}]} initialValue={moment(businessEndTime, 'HH:mm:ss')}>
          <TimePicker/>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: {span: 24, offset: 0},
            sm: {span: 22, offset: 2},
          }}
        >
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default connect(
  state => state.merchantInfo
)(EditMerchantInfo)