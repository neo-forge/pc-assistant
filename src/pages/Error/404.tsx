import { Button, Flex, Result } from "antd";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <Flex
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="对不起，您访问的页面不存在."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            返回首页
          </Button>
        }
      />
    </Flex>
  );
};

export default Error404;
