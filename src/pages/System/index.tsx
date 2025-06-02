import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Card, Segmented, Tabs, Tooltip } from "antd";
import type { TabsProps } from "antd";

import File from "../../components/System/File";
import Process from "../../components/System/Process";
import Clipboard from "../../components/System/Clipboard";
import Shortcut from "../../components/System/Shortcut";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "文件管理",
    children: <File />,
  },
  {
    key: "2",
    label: "进程管理",
    children: <Process />,
  },
  {
    key: "3",
    label: "剪贴板管理",
    children: <Clipboard />,
  },
  {
    key: "4",
    label: "快捷键管理",
    children: <Shortcut />,
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
