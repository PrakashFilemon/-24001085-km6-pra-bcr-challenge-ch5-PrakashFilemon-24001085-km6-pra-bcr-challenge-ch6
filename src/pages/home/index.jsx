import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../redux/actions/cars";
import CarCard from "../../component/CarCard";

const Home = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <Row>
      {cars.length > 0 &&
        cars.map((car) => <CarCard key={car?.id} car={car} />)}
    </Row>
  );
};

export default Home;

// return (
//   <>
//     {isLoading ? (
//       <div className="d-flex flex-wrap justify-content-center">
//         {cars.length > 0 &&
//           cars.map((car) => (
//             <li key={car.id}>
//               <Col md={6} sm={3}>
//                 <Card className="m-2" style={{ width: "18rem" }}>
//                   <Card.Img
//                     className="car-img"
//                     variant="top"
//                     src={car.image}
//                     key={car.id}
//                   />{" "}
//                   <Card.Body>
//                     <Card.Subtitle className="mb-2 text-muted">
//                       Id Car : {car.id}
//                     </Card.Subtitle>
//                     <Card.Title>
//                       {car.manufacture} {car.model}
//                     </Card.Title>{" "}
//                     <Card.Text>
//                       <p>Year : {car.Year}</p>
//                       <p>Rent/Day : {car.rentPerDay}</p>
//                       <p>Type : {car.typeCar}</p>
//                     </Card.Text>{" "}
//                     <Button variant="primary">More Details</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </li>
//           ))}
//       </div>
//     ) : (
//       <div className="text-center mt-5">
//         <h2>Welcome!</h2>
//         <p>Please Login First. Thank You</p>
//       </div>
//     )}
//   </>
// );
