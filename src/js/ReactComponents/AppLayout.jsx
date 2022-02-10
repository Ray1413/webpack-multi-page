import React from 'react'
import { Layout, Menu, Affix } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import '../../css/react-demo.less'
import AppTitle from './AppTitle'
import AppContent from './AppContent'

const { SubMenu } = Menu
const { Content, Footer, Sider } = Layout
const headerHeight = 62;
const footerHeight = 51;

class AppLayout extends React.Component {
  state = {
    collapsed: true,
    siderHeight: `calc(100vh - ${headerHeight}px)`,
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  }

  onAffix = affixed => {
    // console.log(affixed)
    this.setState({
      siderHeight: affixed ? '100vh' : `calc(100vh - ${headerHeight}px)`
    })
  }

  render() {
    const { collapsed, siderHeight } = this.state
    return (
      <Layout style={{ background: '#fff' }}>
        <Affix offsetTop={0} onChange={this.onAffix}>
          <Sider theme='light' width={200} collapsible collapsed={collapsed} onCollapse={this.onCollapse}
            style={{
              height: siderHeight,
            }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
                <Menu.Item key="13">option13</Menu.Item>
                <Menu.Item key="14">option14</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </Affix>
        <Layout>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: 'rgb(252,252,252)',
              borderLeft: '1px solid #f0f0f0',
              borderRight: '1px solid #f0f0f0',
              minHeight: `calc(100vh - ${headerHeight + footerHeight}px)`,
            }}
          >
            <AppTitle />
            <AppContent />
          </Content>

          <Footer style={{
            textAlign: 'center',
            height: footerHeight,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout >
    )
  }
}

export default AppLayout
