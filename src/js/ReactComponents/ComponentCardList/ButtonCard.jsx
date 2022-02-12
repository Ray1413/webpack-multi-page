import React from 'react'
import { Button } from 'antd'
import { ComponentCard } from './index'

function ButtonCard() {
  return (
    <ComponentCard title="Button" extra={<a href="https://ant.design/components/button/" target='_blank' style={{ textDecoration: 'none' }}>More</a>}>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
    </ComponentCard>
  )
}

export default ButtonCard