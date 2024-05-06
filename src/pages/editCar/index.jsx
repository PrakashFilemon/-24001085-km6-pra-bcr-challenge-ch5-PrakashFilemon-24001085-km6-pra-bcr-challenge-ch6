import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import EditComponent from "../../component/crud/EditCar";

const EditCar = () => {
  return (
    <Row>
      <Col md={6} className="offset-md-3">
        <Card>
          <Card.Header>Edit Car</Card.Header>
          <Card.Body>
            <EditComponent />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EditCar;
