import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Card, Segmented, Tabs, Tooltip } from "antd";
import type { TabsProps } from "antd";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "文件管理",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "进程管理",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "剪贴板管理",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "快捷键管理",
    children: "Content of Tab Pane 4",
  },
];

const System = () => {
  return (
    <Card
      style={{
        height: "100%",
      }}
      bodyStyle={{ padding: "0 24px" }}
    >
      <Tabs
        defaultActiveKey="1"
        items={items}
        tabBarExtraContent={{
          right: (
            <Segmented
              size="small"
              options={[
                {
                  value: "List",
                  icon: (
                    <Tooltip title="列表" placement="bottom">
                      <BarsOutlined />
                    </Tooltip>
                  ),
                },
                {
                  value: "grid",
                  icon: (
                    <Tooltip title="宫格" placement="bottom">
                      <AppstoreOutlined />
                    </Tooltip>
                  ),
                },
              ]}
            />
          ),
        }}
      />
    </Card>
  );
};

export default System;
