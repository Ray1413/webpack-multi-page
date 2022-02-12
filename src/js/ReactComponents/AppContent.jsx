import React from 'react'
import { Row, Col, Divider } from 'antd'
import ComponentCardList, { LoadingCard } from './ComponentCardList'

const totalCard = 10
const count = totalCard - ComponentCardList.length
for (let i = 0; i < count; i++) {
  ComponentCardList.push(
    <LoadingCard />
  )
}

function AppContent() {
  return <>
    <Divider orientation="left" style={{ marginTop: 30 }}>Components Overview</Divider>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
      {ComponentCardList.map((card, i) => (
        <Col key={i} xs={24} md={12} lg={8} >
          {card}
        </Col>
      ))}
    </Row>
  </>
}

export default AppContent
