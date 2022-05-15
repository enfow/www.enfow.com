import React from "react";
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
} from '@ant-design/icons';
import ChartPage from "./chartPage";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {key : "1", icon: <PieChartOutlined />, label: "Option 1"}
];

class SiderPage extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            <div>
              <h1 style={{color:"white"}} >Title Hear</h1>
            </div>
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
          >
              <ChartPage />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default () => <SiderPage />;
