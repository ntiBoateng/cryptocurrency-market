import React from 'react'
import {Spin} from "antd"
import {Typography, Space} from "antd"

const {Title} = Typography

const Loader = () => {
  return (
    <div className='loader'>
     <Space size={8}>
     <Title level={2} style={{color: "cyan"}}>Please wait</Title> <br />
      <Title></Title>
        <Spin />
     </Space>
    </div>
  )
}

export default Loader