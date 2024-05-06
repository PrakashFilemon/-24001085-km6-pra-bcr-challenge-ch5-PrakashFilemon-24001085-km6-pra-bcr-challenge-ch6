import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import Navbar from "./component/navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Profile from "./pages/profile";
import CarDetail from "./pages/cars/detail";
import Management from "./pages/management";
import AddCar from "./pages/addCar";
import EditCar from "./pages/editCar";
import Protected from "./component/protected";
import Protected2 from "./component/Protected2";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <Home />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: (
      <Protected2>
        <Navbar />
        <Container className="mt-5">
          <Login />
        </Container>
      </Protected2>
    ),
  },
  {
    path: "/register",
    element: (
      <Protected2>
        <Navbar />
        <Container className="mt-5">
          <Register />
        </Container>
      </Protected2>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <Profile />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/car/:id",
    element: (
      <Protected>
        <Navbar />
        <Container className="mt-5">
          <CarDetail />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/management",
    element: (
      <Protected roles={["admin", "superAdmin"]}>
        <Navbar />
        <Container className="mt-5">
          <Management />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/add",
    element: (
      <Protected roles={["admin", "superAdmin"]}>
        <Container className="mt-5">
          <AddCar />
        </Container>
      </Protected>
    ),
  },
  {
    path: "/edit/:id",
    element: (
      <Protected roles={["admin", "superAdmin"]}>
        <Container className="mt-5">
          <EditCar />
        </Container>
      </Protected>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />

      <ToastContainer theme="colored" />
    </Provider>
  );
}

export default App;
