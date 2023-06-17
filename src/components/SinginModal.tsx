import { Form, Input, Modal, Button } from "antd";
import { useAuthenContext } from "../context/AuthenContext";

export function SinginModal() {
  const [form] = Form.useForm();
  const { isOpenSignModal, setOpenSignModal } = useAuthenContext();
  const cancelHanlder = () => {
    form.resetFields()
    setOpenSignModal(false);
  };
  const hanlderLogin = (values: any) => {
    console.log(values);
    form.resetFields()
    setOpenSignModal(false);
  }
  return (
    <Modal
      open={isOpenSignModal}
      onCancel={hanlderLogin}
      footer={null}
    >
      <h2 className="text-center bold mb-5 font-bold text-lg">Welcome to Wimpy Kids Blog</h2>
      <Form
        name="basic"
        onFinish={hanlderLogin}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className="flex justify-center gap-10">
        <Button  className="px-10 mr-10 font-bold" htmlType="submit">
          Login 
        </Button>
        <Button className="px-10 font-bold" htmlType="button" onClick={cancelHanlder}>
          Cancel
        </Button>
      </Form.Item>
      </Form>
    </Modal>
  );
}
