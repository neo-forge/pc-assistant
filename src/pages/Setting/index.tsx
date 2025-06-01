import React from "react";
import { Button, Card, Tabs, TabsProps } from "antd";

import General from "../../components/Setting/General";
import Appearance from "../../components/Setting/Appearance";
import Notification from "../../components/Setting/Notification";
import About from "../../components/Setting/About";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "通用设置",
    children: <General />,
  },
  {
    key: "2",
    label: "外观设置",
    children: <Appearance />,
  },
  {
    key: "3",
    label: "通知设置",
    children: <Notification />,
  },
  {
    key: "4",
    label: "关于",
    children: <About />,
  },
];

const Settings: React.FC = () => {
  return (
    <Card style={{}} bodyStyle={{ padding: "0 24px" }}>
      <Tabs
        defaultActiveKey="1"
        items={items}
        tabBarStyle={{ marginBottom: 0 }}
      />
    </Card>
  );
};

export default Settings;
