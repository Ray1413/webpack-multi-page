import React, { useState } from 'react'
import { ComponentCard } from './index'
import { Typography } from 'antd';

const { Text } = Typography;

function TypographyCard() {
  const [editableStr, setEditableStr] = useState('Ant Design (editable)')


  return (
    <ComponentCard title="Typography" extra={<a href="https://ant.design/components/typography/" target='_blank' style={{ textDecoration: 'none' }}>More</a>}>
      <Text type="success">Ant Design (success)</Text>
      <Text mark>Ant Design (mark)</Text>
      <Text editable={{ onChange: setEditableStr }}>{editableStr}</Text>
    </ComponentCard>
  )
}

export default TypographyCard