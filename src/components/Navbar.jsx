import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, MenuOutlined, BulbOutlined, FundOutlined, MenuOultined } from '@ant-design/icons'
import icon from "../images/cryptocurrency.png"


const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
        <Avatar src={icon} size="large" />
        
        <Typography.Title level={2} className="logo">
            <Link to="/">CryptoMart</Link>
        </Typography.Title>
        </div>

        <Menu theme='dark'>
<Menu.Item icon={<HomeOutlined style={{color:"cyan", fontSize: "22px"}} />} >
<Link to="/" style={{color:"green", fontSize: "22px"}}>Home</Link>
</Menu.Item>
<Menu.Item icon={<FundOutlined style={{color:"cyan", fontSize: "22px"}} />} >
<Link to="/cryptocurrencies" style={{color:"green", fontSize: "22px"}}>Cryptocurrencies</Link>
</Menu.Item>
<Menu.Item icon={<MoneyCollectOutlined style={{color:"cyan", fontSize: "22px"}} />} >
<Link to="/portfolio" style={{color:"green", fontSize: "22px"}}>Portfolio</Link>
</Menu.Item>
<Menu.Item icon={<BulbOutlined style={{color:"cyan", fontSize: "22px"}} />} >
<Link to="/watchlist" style={{color:"green", fontSize: "22px"}}>Watchlist</Link>
</Menu.Item>
</Menu>  

    </div>
  )
}

export default Navbar