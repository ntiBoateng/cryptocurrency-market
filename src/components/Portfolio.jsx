
import React from 'react'
import { Button, } from 'antd'
import {PlusCircleOutlined} from '@ant-design/icons'



const Portfolio = () => {
 
  return (
   
    <><><div className='adnew'>
      <Button style={{ borderRadius:'10px',background: "rgba(150, 150, 150, 0.2)", color: "black"}}>... More</Button>
      <Button style={{ borderRadius:'10px', background: "rgb(56, 97, 251)", color: "rgb(255, 255, 255)" }}>{<PlusCircleOutlined />}Add New</Button>
    </div>
      <div className='plus'>{<PlusCircleOutlined />}Create portfolio</div>
      <div className='portempty'>
        <div className='etitle'>
          This portfolio is empty
        </div>
        <div className='esubtitle'>Add any coins to get started</div>
      </div></>
      </>
    
  )
}

export default Portfolio