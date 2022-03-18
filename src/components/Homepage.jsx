import React from 'react'
import millify from "millify"
import {Typography, Row, Col, Statistic} from "antd"
import {PlusCircleOutlined} from '@ant-design/icons'
import {Link} from "react-router-dom"

import {Cryptocurrencies} from "../components"


//api call 
import {useGetCryptosQuery} from "../services/cryptoApi"

import Loader from "./Loader"

const {Title} = Typography;

const Homepage = () => {

const {data, isFetching} = useGetCryptosQuery(10)



const globalStats = data?.data?.stats

//console.log(data)

if(isFetching) return <Loader />

  return (
    <>
    <Title level={2} className="heading">Cryptocurrency Market Global Stats</Title>

   <div className='plus'>{<PlusCircleOutlined/>}<Link to="Portfolio" style={{color: "black"}}>Create Portfolio</Link></div> 
    

    <Row>
      <Col span={12}>
        <Statistic title="Total Cryptocurrencies" value={millify(globalStats.total)} />
      </Col>
      <Col span={12}>
        <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
      </Col>
      <Col span={12}>
        <Statistic title="Total Market cap" value={millify(globalStats.totalMarketCap)} />
      </Col>
      <Col span={12}>
        <Statistic title="Total 24hr Volume" value={millify(globalStats.total24hVolume)} />
      </Col>
      <Col span={12}>
        <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
      </Col>
    </Row>

<div className="home-heading-container">
  <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
  <Title level={4} className="show-more"> <Link to="/cryptocurrencies">Show more</Link> </Title>
</div>
<Cryptocurrencies simplified />

    </>
  )
}

export default Homepage