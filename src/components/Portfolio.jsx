
import React from 'react'
import { Button, } from 'antd'
import {PlusCircleOutlined} from '@ant-design/icons'



const Portfolio = () => {
 
  return (
   
    <><div className='adnew'>
      <Button style={{ background: "rgba(150, 150, 150, 0.2)" }}>... More</Button>
      <Button style={{ background: "rgb(56, 97, 251)", color: "rgb(255, 255, 255)" }}>{<PlusCircleOutlined />}Add New</Button>
    </div>
    <div className='portempty'>
    <div className='etitle'>
         This portfolio is empty
      </div>
      <div className='esubtitle'>Add any coins to get started</div>
      </div>
      </>
    
  )
}

export default Portfolio