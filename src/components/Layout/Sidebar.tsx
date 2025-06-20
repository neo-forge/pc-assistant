import {
  Avatar,
  Button,
  Card,
  Flex,
  Popover,
  Space,
  Tooltip,
  Typography,
} from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  ContainerOutlined,
  GlobalOutlined,
  HomeOutlined,
  LogoutOutlined,
  MoonOutlined,
  SettingOutlined,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { CSSProperties, useEffect, useState } from "react";

import { useThemeStore } from "../../hooks/useThemeStore";
import logo from "../../assets/react.svg";

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  key: string;
}

const { Text } = Typography;

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isDark, setDark } = useThemeStore();
  const [activeKey, setActiveKey] = useState("home");

  const handleLogout = () => {
    console.log("用户已退出登录");
  };

  const content = (
    <Flex vertical gap={10}>
      <Flex align="center" gap={10}>
        <Avatar size={64} icon={<UserOutlined />} />
        <Space direction="vertical">
          <Text strong>航</Text>
          <Text type="secondary" style={{ fontSize: 12 }}>
            hang@example.com
          </Text>
        </Space>
      </Flex>
      <Button
        type="primary"
        danger
        block
        icon={<LogoutOutlined />}
        onClick={handleLogout}
        style={{ marginTop: 8 }}
      >
        退出登录
      </Button>
    </Flex>
  );

  const iconStyle: CSSProperties = {
    fontSize: 20,
    color: isDark ? "#fff" : "#000",
  };

  const menu: MenuItem[] = [
    {
      key: "home",
      label: "首页",
      path: "/",
      icon: (
        <HomeOutlined
          style={{
            fontSize: 24,
            color: activeKey === "home" ? "#1677ff" : isDark ? "#fff" : "#000",
          }}
        />
      ),
    },
    {
      key: "system",
      label: "系统管理",
      path: "/system",
      icon: (
        <GlobalOutlined
          style={{
            fontSize: 24,
            color:
              activeKey === "system" ? "#1677ff" : isDark ? "#fff" : "#000",
          }}
        />
      ),
    },
    {
      key: "application",
      label: "应用列表",
      path: "/application",
      icon: (
        <AppstoreOutlined
          style={{
            fontSize: 24,
            color:
              activeKey === "application"
                ? "#1677ff"
                : isDark
                ? "#fff"
                : "#000",
          }}
        />
      ),
    },
    {
      key: "setting",
      label: "系统设置",
      path: "/settings",
      icon: (
        <SettingOutlined
          style={{
            fontSize: 24,
            color:
              activeKey === "settings" ? "#1677ff" : isDark ? "#fff" : "#000",
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    if (pathname === "/") {
      setActiveKey("home");
    } else {
      setActiveKey(pathname.split("/")[1]);
    }
  }, [pathname]);

  return (
    <Flex
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: isDark ? "#141414" : "#fff",
      }}
      vertical
      align="center"
      justify="space-between"
    >
      <Space direction="vertical" size={20} align="center">
        <img src={logo} alt="react logo" />
        <Space direction="vertical" align="center" size={10}>
          {menu.map((item) => (
            <Tooltip placement="right" key={item.key} title={item.label}>
              <Button
                style={{
                  width: 50,
                  height: 50,
                }}
                type="text"
                icon={item.icon}
                onClick={() => {
                  setActiveKey(item.key);
                  navigate(item.path);
                }}
              />
            </Tooltip>
          ))}
        </Space>
      </Space>
      <Space direction="vertical" align="center" size={10}>
        <Tooltip placement="right" title="意见反馈">
          <Button
            style={{
              width: 40,
              height: 40,
            }}
            type="text"
            icon={<ContainerOutlined style={iconStyle} />}
            onClick={() => navigate("/feedback")}
          />
        </Tooltip>
        <Tooltip placement="right" title={isDark ? "白天模式" : "夜间模式"}>
          <Button
            style={{
              width: 40,
              height: 40,
            }}
            type="text"
            icon={
              isDark ? (
                <SunOutlined style={iconStyle} />
              ) : (
                <MoonOutlined style={iconStyle} />
              )
            }
            onClick={() => setDark(!isDark)}
          />
        </Tooltip>
        <Popover
          content={content}
          trigger="hover"
          placement="rightTop"
          arrow={false}
        >
          <Avatar size={48} icon={<UserOutlined />} />
        </Popover>
      </Space>
    </Flex>
  );
};

export default Sidebar;
