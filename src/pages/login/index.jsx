import LoginComponent from "../../component/Login";
import { Row, Card, Col } from "react-bootstrap";

const Login = () => {
  return (
    <Row>
      <Col md={6} className="offset-md-3">
        <Card>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <LoginComponent />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
