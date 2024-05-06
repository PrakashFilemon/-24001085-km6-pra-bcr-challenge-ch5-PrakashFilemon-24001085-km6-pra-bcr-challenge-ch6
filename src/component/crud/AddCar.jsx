import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewCar } from "../../redux/actions/cars";

function AddComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [plate, setPlate] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const [image, setImage] = useState();
  const [rentPerDay, setrentPerDay] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [carsize_id, setCarsize_id] = useState("");
  const [availableAt, setAvailableAt] = useState("");
  const [transmission, setTransmission] = useState("");
  const [available, setAvailable] = useState(false);
  const [typeCar, settypeCar] = useState("");
  const [Year, setYear] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    //Login action (fetch Api)
    dispatch(
      addNewCar(
        navigate,
        plate,
        manufacture,
        model,
        image,
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

          <Form.Group controlId="image" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
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
              type="date"
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

export default AddComponent;
