import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCarId, getCars, getCar } from "../../redux/actions/cars";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const management = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCarId(id));
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Button variant="primary" as={Link} to={`/add`}>
          Add new Car
        </Button>
        <Table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Manufacture</th>
              <th>Model</th>
              <th>Year</th>
              <th>RentPerDay</th>
              <th>Transmisson</th>
              <th>Type Car</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.manufacture}</td>
                <td>{car.model}</td>
                <td>{car.Year}</td>
                <td>{car.rentPerDay}</td>
                <td>{car.transmission}</td>
                <td>{car.typeCar}</td>
                <td>{car.available ? "Available" : "Not Available"}</td>
                <td>
                  <Button variant="primary" as={Link} to={`/edit/${car?.id}`}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(car.id)}>
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default management;
