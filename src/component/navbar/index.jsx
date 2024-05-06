import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getProfile, logout } from "../../redux/actions/auth";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProfile(null, null, null));
  }, [dispatch, token]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Kampus Merdeka
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  {user?.name}
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    dispatch(logout());
                    navigate("/login");
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Management
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

// const [user, setUser] = useState(null);

// const getProfile = async (token) => {
//   let config = {
//     method: "get",
//     maxBodyLength: Infinity,
//     url: `${import.meta.env.VITE_BACKEND_API}/api/auth/profile`,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const response = await axios.request(config);
//     const { data } = response.data;

//     //set user by response
//     setUser(data);
//   } catch (error) {
//     //Because token is not valid, we will delete it from local storage
//     setUser(null);
//     localStorage.removeItem("token");
//   }
// };

// useEffect(() => {
//   //Get user from token if we have token
//   const token = localStorage.getItem("token");
//   if (token) {
//     getProfile(token);
//   }
// }, []);
