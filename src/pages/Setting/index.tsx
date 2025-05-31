import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <Flex>
      <Button onClick={() => navigate("/")}>返回首页</Button>
      <Button onClick={() => navigate("/system")}>返回系统管理</Button>
      <Button onClick={() => navigate("/application")}>返回应用列表</Button>
      <Button onClick={() => navigate("/login")}>返回登录</Button>
      <Button onClick={() => navigate("/error/404")}>返回404</Button>
      <Button onClick={() => navigate("/error/500")}>不存在的页面</Button>
    </Flex>
  );
};

export default Settings;
