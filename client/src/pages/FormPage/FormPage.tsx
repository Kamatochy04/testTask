import { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { SuccessModal } from "@/widgets";
import { useAppDispatch } from "@/app/store/hooks";
import { FormDataType, setUserData } from "@/shared/slices/formSlice";
import styles from "./ContactForm.module.scss";
import TextArea from "antd/es/input/TextArea";
import { phoneValidationRegex } from "@/shared/utils/formatPhoneNumber";
import { useSendMessageMutation } from "./api/form.api";

const { Title } = Typography;

const FormPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const dispatch = useAppDispatch();

  const onFinish = async (values: FormDataType) => {
    try {
      await sendMessage(values).unwrap();
      dispatch(setUserData(values));
      setIsModalVisible(true);
      form.resetFields();
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <Card className={styles.formCard}>
        <Title level={3}>Отправьте нам сообщение</Title>
        <Form
          form={form}
          layout="vertical"
          className={styles.form}
          onFinish={onFinish}
        >
          <Form.Item
            label="Имя"
            name="name"
            rules={[
              { required: true, message: "Пожалуйста, введите ваше имя!" },
              { min: 2, message: "Имя должно содержать не менее 2 символов." },
            ]}
          >
            <Input placeholder="Введите имя" size="large" />
          </Form.Item>

          <Form.Item
            label="Телефон"
            name="phonenumber"
            rules={[
              { required: true, message: "Пожалуйста, введите телефон!" },
              {
                pattern: phoneValidationRegex,
                message: "Телефон должен быть в формате +375... или 80...",
              },
            ]}
          >
            <Input placeholder="+375..." size="large" />
          </Form.Item>

          <Form.Item
            label="Сообщение"
            name="message"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите ваше сообщение!",
              },
              {
                min: 2,
                message: "Сообщение должно содержать не менее 2 символов.",
              },
            ]}
          >
            <TextArea placeholder="Введите сообщение" rows={4} size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className={styles.submitButton}
              loading={isLoading}
            >
              Отправить
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <SuccessModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </div>
  );
};

export default FormPage;
