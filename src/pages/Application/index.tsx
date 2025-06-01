import {
  AppstoreOutlined,
  DeleteOutlined,
  ExclamationCircleFilled,
  FolderOpenOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Flex,
  List,
  message,
  Modal,
  Typography,
} from "antd";

const { Text } = Typography;
const { confirm } = Modal;

const mockApps = [
  {
    id: "1",
    name: "Visual Studio Code",
    version: "1.80.0",
    icon: "https://code.visualstudio.com/assets/favicon.ico",
    path: "/opt/vscode",
  },
  {
    id: "2",
    name: "Google Chrome",
    version: "114.0.5735.198",
    icon: "https://www.google.com/chrome/static/images/favicons/favicon-96x96.png",
    path: "/opt/google/chrome",
  },
  {
    id: "3",
    name: "Slack",
    version: "4.35.0",
    icon: "https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png",
    path: "/opt/slack",
  },
  {
    id: "4",
    name: "Figma",
    version: "115.0.0",
    icon: "https://static.figma.com/app/icon/1/favicon.ico",
    path: "/opt/figma",
  },
  {
    id: "5",
    name: "Docker Desktop",
    version: "4.12.0",
    icon: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    path: "/opt/docker",
  },
  {
    id: "6",
    name: "LibreOffice",
    version: "7.5.3",
    icon: "https://www.libreoffice.org/favicon.ico",
    path: "/opt/libreoffice",
  },
  {
    id: "7",
    name: "IntelliJ IDEA",
    version: "2023.1",
    icon: "https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png",
    path: "/opt/idea",
  },
  {
    id: "8",
    name: "Adobe Photoshop",
    version: "24.1.0",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    path: "C:/Program Files/Adobe/Photoshop",
  },
  {
    id: "9",
    name: "7-Zip",
    version: "23.01",
    icon: "https://www.7-zip.org/favicon.ico",
    path: "C:/Program Files/7-Zip",
  },
  {
    id: "10",
    name: "Notion",
    version: "2.0.37",
    icon: "https://www.notion.so/front-static/favicon.ico",
    path: "/opt/notion",
  },
  {
    id: "11",
    name: "QQ",
    version: "9.7.5",
    icon: "https://im.qq.com/favicon.ico",
    path: "C:/Program Files/Tencent/QQ",
  },
  {
    id: "12",
    name: "WeChat",
    version: "3.9.0",
    icon: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
    path: "C:/Program Files/Tencent/WeChat",
  },
  {
    id: "13",
    name: "Everything",
    version: "1.4.1.1022",
    icon: "https://www.voidtools.com/favicon.ico",
    path: "C:/Program Files/Everything",
  },
  {
    id: "14",
    name: "WPS Office",
    version: "11.8.2.11672",
    icon: "https://www.wps.cn/favicon.ico",
    path: "C:/Program Files/WPS Office",
  },
];

const Application = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const openFolder = (path: string) => {
    messageApi.open({
      type: "success",
      content: `打开文件夹：${path}`,
    });
  };

  const uninstallApp = (name: string) => {
    showConfirm(name);
  };

  const showConfirm = (name: string) => {
    confirm({
      title: `确定要彻底卸载应用：${name}？`,
      icon: <ExclamationCircleFilled />,
      content: "卸载后无法恢复，请谨慎操作",
      onOk() {
        messageApi.open({
          type: "success",
          content: `${name}卸载成功`,
        });
      },
      onCancel() {
        messageApi.open({
          type: "warning",
          content: `已取消卸载`,
        });
      },
    });
  };

  return (
    <Card
      bodyStyle={{ padding: "0 24px" }}
      title={
        <Text strong style={{ fontSize: 16 }}>
          <AppstoreOutlined /> 已安装应用
        </Text>
      }
    >
      {contextHolder}
      <List
        itemLayout="horizontal"
        dataSource={mockApps}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                key="open"
                type="link"
                size="small"
                icon={<FolderOpenOutlined />}
                onClick={() => openFolder(item.path)}
              >
                打开文件夹
              </Button>,
              <Button
                key="uninstall"
                type="link"
                danger
                size="small"
                icon={<DeleteOutlined />}
                onClick={() => uninstallApp(item.name)}
              >
                卸载
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={
                <Flex align="center" gap={12}>
                  <Avatar shape="square" src={item.icon} />
                  <Text strong>{item.name}</Text>
                  <Text type="secondary">v{item.version}</Text>
                </Flex>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Application;
