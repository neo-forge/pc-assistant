import React, { useState } from "react";
import { List, Switch } from "antd";

const Notification: React.FC = () => {
  const [data, setData] = useState({
    enableNotification: true,
    sound: false,
    desktopPopup: true,
  });

  const dataOptions = [
    {
      title: "启动通知",
      content: (
        <Switch
          checked={data.enableNotification}
          onChange={(checked) =>
            setData({ ...data, enableNotification: checked })
          }
        />
      ),
    },
    {
      title: "通知提示音",
      content: (
        <Switch
          checked={data.sound}
          onChange={(checked) => setData({ ...data, sound: checked })}
        />
      ),
    },
    {
      title: "通知弹窗",
      content: (
        <Switch
          checked={data.desktopPopup}
          onChange={(checked) => setData({ ...data, desktopPopup: checked })}
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

export default Notification;
