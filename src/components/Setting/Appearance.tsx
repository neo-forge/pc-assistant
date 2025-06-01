import React, { useState } from "react";
import { List, Select } from "antd";

const { Option } = Select;

const Appearance: React.FC = () => {
  const [data, setData] = useState({
    theme: "light",
    fontSize: "small",
    language: "zh-CN",
  });

  const dataOptions = [
    {
      title: "系统主题",
      content: (
        <Select
          style={{ width: 100 }}
          value={data.theme}
          onChange={(value) => setData({ ...data, theme: value })}
        >
          <Option value="light">浅色</Option>
          <Option value="dark">深色</Option>
          <Option value="system">跟随系统</Option>
        </Select>
      ),
    },
    {
      title: "系统字体",
      content: (
        <Select
          style={{ width: 100 }}
          value={data.fontSize}
          onChange={(value) => setData({ ...data, fontSize: value })}
        >
          <Option value="small">小</Option>
          <Option value="medium">中</Option>
          <Option value="large">大</Option>
        </Select>
      ),
    },
    {
      title: "界面语言",
      content: (
        <Select
          style={{ width: 100 }}
          value={data.language}
          onChange={(value) => setData({ ...data, language: value })}
        >
          <Option value="zh-CN">简体中文</Option>
          <Option value="en-US">English</Option>
          <Option value="ja-JP">日本語</Option>
        </Select>
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

export default Appearance;
