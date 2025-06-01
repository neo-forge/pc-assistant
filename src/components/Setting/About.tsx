import React, { useState } from "react";
import { Divider, Flex, List, Space, Tag, Typography } from "antd";

const { Text, Link } = Typography;

const About: React.FC = () => {
  const [data, setData] = useState({
    enableUpdate: false,
    version: "1.0.0",
    license: "MIT",
    author: "航",
    qq: "67490009",
    wechat: "slh09091025",
    email: "67490009@qq.com",
    website: "https://lhbest.com",
    github: "https://github.com/shanlihang",
  });

  const dataOptions = [
    {
      title: (
        <Space>
          <Text>版本号</Text>
          <Tag color="orange">{data.version}</Tag>
        </Space>
      ),
      content: (
        <Space>
          <Link disabled={!data.enableUpdate}>
            {data.enableUpdate ? "立即更新" : "已是最新版本"}
          </Link>
          <Link>版本历史</Link>
        </Space>
      ),
    },
    {
      title: <Text>许可证</Text>,
      content: <Text>{data.license}</Text>,
    },
    {
      title: <Text>作者</Text>,
      content: <Text>{data.author}</Text>,
    },
    {
      title: <Text>QQ</Text>,
      content: <Text>{data.qq}</Text>,
    },
    {
      title: <Text>微信</Text>,
      content: <Text>{data.wechat}</Text>,
    },
    {
      title: <Text>邮箱</Text>,
      content: <Text>{data.email}</Text>,
    },
    {
      title: <Text>网站</Text>,
      content: <Text>{data.website}</Text>,
    },
    {
      title: <Text>GitHub</Text>,
      content: <Text>{data.github}</Text>,
    },
  ];
  return (
    <Flex vertical>
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
      <Divider plain>
        <Text type="secondary">© 2025 航 All rights reserved.</Text>
      </Divider>
    </Flex>
  );
};

export default About;
