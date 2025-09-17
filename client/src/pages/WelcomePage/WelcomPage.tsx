import { Button, Card, Typography, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.scss";

const { Title, Paragraph } = Typography;

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Row justify="center" align="middle" className="welcome-row">
      <Col xs={24} sm={20} md={12} lg={8}>
        <Card className="welcome-card">
          <Title level={2} className="welcome-title">
            Добро пожаловать!
          </Title>
          <Paragraph>
            Это простое приложение для отправки сообщений. Нажмите кнопку ниже,
            чтобы начать.
          </Paragraph>
          <Button type="primary" size="large" onClick={() => navigate("/form")}>
            Далее
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default WelcomePage;
