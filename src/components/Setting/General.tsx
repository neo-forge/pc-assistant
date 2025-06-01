import React, { useState } from "react";
import { List, Switch } from "antd";

const General: React.FC = () => {
  const [data, setData] = useState({
    autoStart: true,
    miniToTray: true,
    sendLogs: false,
  });

  const dataOptions = [
    {
      title: "开机自启动",
      content: (
        <Switch
          checked={data.autoStart}
          onChange={(checked) => setData({ ...data, autoStart: checked })}
        />
      ),
    },
    {
      title: "最小化到托盘",
      content: (
        <Switch
          checked={data.miniToTray}
          onChange={(checked) => setData({ ...data, miniToTray: checked })}
        />
      ),
    },
    {
      title: "匿名上报错误日志",
      content: (
        <Switch
          checked={data.sendLogs}
          onChange={(checked) => setData({ ...data, sendLogs: checked })}
        />
      ),
    },
  ];
  return (
    <List
      itemLayout="horizontal"
      dataSource={dataOptions}
      renderItem={(item, index) => (
        <List.Item key={index}>
          <List.Item.Meta title={item.title} />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default General;
