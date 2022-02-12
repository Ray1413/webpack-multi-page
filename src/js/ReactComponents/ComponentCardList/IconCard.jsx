import React from 'react'
import { ComponentCard } from './index'
import {
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
} from '@ant-design/icons'

const style = {
  fontSize: 30,
}

function IconCard() {
  return (
    <ComponentCard title="Icon" extra={<a href="https://ant.design/components/icon/" target='_blank' style={{ textDecoration: 'none' }}>More</a>}>
      <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        <AndroidOutlined style={{ ...style, color: 'lightGreen' }} />
        <AppleOutlined style={{ ...style }} />
        <WindowsOutlined style={{ ...style, color: 'lightBlue' }} />
      </div>
    </ComponentCard>
  )
}

export default IconCard