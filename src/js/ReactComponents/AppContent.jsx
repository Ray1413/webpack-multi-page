import React from 'react'
import { Row, Col, Divider, Card } from 'antd';

const list = [];

for (let i = 0; i < 20; i++) {
  list.push(
    <Col xs={24} md={12} lg={8} key={i}>
      <Card hoverable title="Default size card" style={{ height: 250 }}>
        <p>Card content</p>
      </Card>
    </Col>
  )
}

function AppContent() {
  return <>
    <Divider orientation="left" style={{ marginTop: 30 }}>Components Overview</Divider>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
      {list}
    </Row>
  </>
}

export default AppContent
