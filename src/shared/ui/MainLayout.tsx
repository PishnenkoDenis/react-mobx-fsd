import { Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default MainLayout;
