import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const { Sider, Content } = Layout;

const PageLayout = () => {
  return (
    <Layout
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <Layout>
        <Sider
          width="80"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <Sidebar />
        </Sider>
        <Content
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
