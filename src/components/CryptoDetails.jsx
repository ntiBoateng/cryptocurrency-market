import React from 'react'
import HTMLReactParser from "html-react-parser"

import { useParams } from 'react-router-dom'
import millify from 'millify'
import { Typography, Col, Row, Select } from 'antd'

import { MoneyCollectOutlined, DollarCirleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined } from '@ant-design/icons'

const {Title, Text} = Typography
const {Option} = Select

const CryptoDetails = () => {

const {coinId} = useParams()

  return (
    <div>CryptoDetails {coinId}</div>
  )
}

export default CryptoDetails