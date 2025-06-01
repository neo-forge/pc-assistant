import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Form,
  Input,
  message,
  Select,
  Space,
  Upload,
} from "antd";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;
const { Option } = Select;

const Feedback = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        messageApi.open({
          type: "success",
          content: "反馈提交成功",
        });
        form.resetFields();
        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch(() => {
        messageApi.open({
          type: "error",
          content: "请填入必填信息",
        });
      });
  };

  return (
    <Card title="系统反馈">
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        initialValues={{ type: "suggestion" }}
      >
        <Form.Item
          name="type"
          label="反馈类型"
          rules={[{ required: true, message: "请选择反馈类型" }]}
        >
          <Select placeholder="请选择反馈类型">
            <Option value="bug">Bug 问题</Option>
            <Option value="suggestion">功能建议</Option>
            <Option value="experience">使用体验</Option>
            <Option value="other">其他</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="title"
          label="标题"
          rules={[{ required: true, message: "请输入标题" }]}
        >
          <Input placeholder="简要描述问题或建议" />
        </Form.Item>
        <Form.Item
          name="description"
          label="详细描述"
          rules={[{ required: true, message: "请填写详细描述" }]}
        >
          <TextArea
            rows={4}
            placeholder="请详细说明您的问题或建议，便于我们更好地处理"
          />
        </Form.Item>
        <Form.Item name="contact" label="联系方式（选填）">
          <Input placeholder="如需回复，请填写邮箱或手机号" />
        </Form.Item>
        <Form.Item name="attachment" label="附件上传（截图或日志）">
          <Upload.Dragger name="files" beforeUpload={() => false}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或拖拽文件上传</p>
            <p className="ant-upload-hint">
              支持图片、日志等文件，最多上传1个文件
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Button type="primary" block onClick={handleSubmit}>
          提交反馈
        </Button>
        <Button block onClick={() => navigate("/")}>
          取消反馈
        </Button>
      </Space>
    </Card>
  );
};

export default Feedback;
