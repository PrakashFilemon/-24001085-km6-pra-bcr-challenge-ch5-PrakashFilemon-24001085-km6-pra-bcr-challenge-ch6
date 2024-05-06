import { Col, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <Col md={3} sm={3}>
      <Card className="m-2" style={{ width: "18rem" }}>
        <Card.Img
          className="car-img"
          variant="top"
          src={car.image}
          key={car.id}
        />{" "}
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Id Car : {car.id}
          </Card.Subtitle>
          <Card.Title>
            {car.manufacture} {car.model}
          </Card.Title>{" "}
          <Card.Text>
            <p>Year : {car.Year}</p>
            <p>Rent/Day : {car.rentPerDay}</p>
            <p>Type : {car.typeCar}</p>
          </Card.Text>{" "}
          <Button variant="primary" as={Link} to={`/car/${car?.id}`}>
            More Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

CarCard.propTypes = {
  car: PropTypes.object,
};

export default CarCard;
