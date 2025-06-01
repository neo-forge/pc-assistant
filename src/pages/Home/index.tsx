import {
  Card,
  Col,
  Row,
  Alert,
  Descriptions,
  Tag,
  Space,
  Typography,
  Divider,
} from "antd";
import {
  DesktopOutlined,
  CloudOutlined,
  DatabaseOutlined,
  FolderOpenOutlined,
  BugOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const mockData = {
  os: {
    name: "Ubuntu",
    version: "22.04 LTS",
    kernel: "5.15.0-76-generic",
    hostname: "dev-machine",
  },
  network: {
    eth0: {
      received: 1053300123,
      transmitted: 2234123,
    },
  },
  memory: {
    total: 16384,
    used: 7294,
    available: 9090,
  },
  cpu: {
    brand: "Intel(R) Core(TM) i7-9700K",
    cores: 8,
    usage: 15.7,
  },
  disk: [
    {
      mount: "/",
      total: 512,
      available: 160,
      fs: "ext4",
      type: "SSD",
    },
  ],

  user: {
    username: "hugo",
    hostname: "HUGO-PC",
    desktop_env: "GNOME",
    shell: "/bin/bash",
  },
};

export default function SystemDashboard() {
  return (
    <Space direction="vertical" size={20}>
      <Alert
        message={
          <Space split={<Divider type="vertical" />}>
            <Text strong>当前用户名：{mockData.user.username}</Text>
            <Tag color="green">正常运行</Tag>
          </Space>
        }
        description={
          <Space direction="vertical">
            <Text strong>系统主机名：{mockData.os.hostname}</Text>
          </Space>
        }
        type="info"
      />

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card
            title={
              <Space>
                <DesktopOutlined />
                <Text strong>操作系统</Text>
              </Space>
            }
          >
            <Descriptions column={1} size="small">
              <Descriptions.Item label="系统">
                {mockData.os.name}
              </Descriptions.Item>
              <Descriptions.Item label="版本">
                {mockData.os.version}
              </Descriptions.Item>
              <Descriptions.Item label="内核">
                {mockData.os.kernel}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={
              <Space>
                <CloudOutlined />
                <Text strong>网络信息</Text>
              </Space>
            }
          >
            {Object.entries(mockData.network).map(([iface, net], idx) => (
              <Descriptions key={idx} column={1} size="small">
                <Descriptions.Item label="接入接口">
                  {`${iface}`}
                </Descriptions.Item>
                <Descriptions.Item label="接收">
                  {(net.received / 1024 / 1024).toFixed(2)} MB
                </Descriptions.Item>
                <Descriptions.Item label="发送">
                  {(net.transmitted / 1024 / 1024).toFixed(2)} MB
                </Descriptions.Item>
              </Descriptions>
            ))}
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={
              <Space>
                <DatabaseOutlined />
                <Text strong>内存信息</Text>
              </Space>
            }
          >
            <Descriptions column={1} size="small">
              <Descriptions.Item label="总内存">
                {mockData.memory.total} MiB
              </Descriptions.Item>
              <Descriptions.Item label="已用">
                {mockData.memory.used} MiB
              </Descriptions.Item>
              <Descriptions.Item label="可用">
                {mockData.memory.available} MiB
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title={
              <Space>
                <FolderOpenOutlined />
                <Text strong>磁盘信息</Text>
              </Space>
            }
          >
            {mockData.disk.map((disk, index) => (
              <Descriptions key={index} column={1} size="small">
                <Descriptions.Item label="磁盘容量">
                  {disk.available} GB / {disk.total} GB
                </Descriptions.Item>
                <Descriptions.Item label="磁盘类型">
                  <Tag color={disk.type === "SSD" ? "blue" : "orange"}>
                    {disk.type}
                  </Tag>
                </Descriptions.Item>
                <Descriptions.Item label="文件系统">
                  {disk.fs}
                </Descriptions.Item>
              </Descriptions>
            ))}
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title={
              <Space>
                <BugOutlined />
                <Text strong>CPU信息</Text>
              </Space>
            }
          >
            <Descriptions column={1} size="small">
              <Descriptions.Item label="品牌">
                {mockData.cpu.brand}
              </Descriptions.Item>
              <Descriptions.Item label="核心数">
                {mockData.cpu.cores}
              </Descriptions.Item>
              <Descriptions.Item label="使用率">
                {mockData.cpu.usage}%
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </Space>
  );
}
