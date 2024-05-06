import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EditCar, getCar } from "../../redux/actions/cars";

function EditComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const { carInfo } = useSelector((state) => state.car);

  const [plate, setPlate] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const [rentPerDay, setrentPerDay] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [carsize_id, setCarsize_id] = useState("");
  const [availableAt, setAvailableAt] = useState("");
  const [transmission, setTransmission] = useState("");
  const [available, setAvailable] = useState(false);
  const [typeCar, settypeCar] = useState("");
  const [Year, setYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(getCar(navigate, id));
  }, [dispatch, id, navigate]);

  useEffect(() => {
    if (carInfo) {
      setPlate(carInfo.plate);
      setManufacture(carInfo.manufacture);
      setModel(carInfo.model);
      setrentPerDay(carInfo.rentPerDay);
      setCapacity(carInfo.capacity);
      setDescription(carInfo.description);
      setCarsize_id(carInfo.carsize_id);
      setAvailableAt(carInfo.availableAt);
      setAvailable(carInfo.available);
      setTransmission(carInfo.transmission);
      settypeCar(carInfo.typeCar);
      setYear(carInfo.Year);
    }
  }, [carInfo]);

  const onSubmit = async (e) => {
    e.preventDefault();

    //Login action (fetch Api)
    dispatch(
      EditCar(
        navigate,
        plate,
        manufacture,
        model,
        rentPerDay,
        capacity,
        description,
        carsize_id,
        availableAt,
        transmission,
        available,
        typeCar,
        Year,
        setIsLoading
      )
    );
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="plate">
            <Form.Label>Plate</Form.Label>
            <Form.Control
              type="text"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="manufacture">
            <Form.Label>Manufacture</Form.Label>
            <Form.Control
              type="text"
              value={manufacture}
              onChange={(e) => setManufacture(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="model">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="rentPerDay">
            <Form.Label>Rent One Day</Form.Label>
            <Form.Control
              type="text"
              value={rentPerDay}
              onChange={(e) => setrentPerDay(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="capacity">
            <Form.Label>Capacity</Form.Label>
            <Form.Control
              type="text"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="carsize_id">
            <Form.Label>CarSize</Form.Label>
            <Form.Control
              type="text"
              value={carsize_id}
              onChange={(e) => setCarsize_id(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="availableAt">
            <Form.Label>AvailableAt</Form.Label>
            <Form.Control
              type="text"
              value={availableAt}
              onChange={(e) => setAvailableAt(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="available">
            <Form.Label>Available</Form.Label>
            <Form.Control
              as="select"
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
            >
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="transmission">
            <Form.Label>Transmission</Form.Label>
            <Form.Control
              type="text"
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="typeCar">
            <Form.Label>Type Car</Form.Label>
            <Form.Control
              type="text"
              value={typeCar}
              onChange={(e) => settypeCar(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Year">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="text"
              value={Year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? "Processing..." : "Save"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EditComponent;
