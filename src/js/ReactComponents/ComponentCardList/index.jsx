import React from 'react'
import { Card } from 'antd'
import ButtonCard from './ButtonCard'
import IconCard from './IconCard'
import TypographyCard from './TypographyCard'

const ComponentCardList = [
  <ButtonCard />,
  <IconCard />,
  <TypographyCard />,
]

export function ComponentCard(props) {
  return (
    <Card
      hoverable
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 190,
      }}
      style={{ height: 250 }}
      {...props}
    />
  )
}

export function LoadingCard(props) {
  return (
    <ComponentCard
      title='Loading'
      loading
      hoverable={false}
      bodyStyle={{}}
      {...props}
    />
  )
}

export default ComponentCardList