import { useEffect } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCar } from "../../redux/actions/cars";

const CarDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { carInfo } = useSelector((state) => state.car);

  useEffect(() => {
    // TODD Get Car Details
    // Dispatch -> get car detail by params
    dispatch(getCar(navigate, id));
  }, [dispatch, id, navigate]);

  return (
    <Row>
      <Col md={6} className="offset-md-3">
        <Card>
          <Card.Header>{carInfo?.manufacture}</Card.Header>
          <Card.Body>
            <Form>
              {!carInfo ? (
                <>
                  <h2>Loading...</h2>
                </>
              ) : (
                <>
                  {carInfo?.image && (
                    <Image src={carInfo?.image} className="img-fluid" rounded />
                  )}
                  <div className="mt-4">
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Plate</Form.Label>
                      <Form.Control
                        type="text"
                        value={carInfo?.plate}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Manufacture</Form.Label>
                      <Form.Control
                        type="email"
                        value={carInfo?.manufacture}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Year</Form.Label>
                      <Form.Control
                        type="email"
                        value={carInfo?.Year}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>RentPerDay</Form.Label>
                      <Form.Control
                        type="email"
                        value={carInfo?.rentPerDay}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="email"
                        value={carInfo?.description}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Capacity</Form.Label>
                      <Form.Control
                        type="email"
                        value={carInfo?.capacity}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Transmission</Form.Label>
                      <Form.Control
                        type="email"
                        value={carInfo?.transmission}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Type Car</Form.Label>
                      <Form.Control
                        type="email"
                        value={carInfo?.typeCar}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Available</Form.Label>
                      <Form.Control
                        type="email"
                        value={carInfo?.available}
                        disabled
                      />
                    </Form.Group>
                  </div>
                </>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CarDetails;
