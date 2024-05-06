import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    /* login action (fetch api) */
    dispatch(login(navigate, email, password, setIsLoading));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Processing..." : "Submit"}
      </Button>
    </Form>
  );
}

export default Login;

//login action (fetch api)
//   let data = JSON.stringify({
//     email,
//     password,
//   });

//   let config = {
//     method: "post",
//     url: `${import.meta.env.VITE_BACKEND_API}/api/auth/login`,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };

//   try {
//     const response = await axios.request(config);

//     //get and Save token to local storage
//     const { data } = response.data;
//     const { token } = data;
//     localStorage.setItem("token", token);

//     //Navigate it to home page
//     // navigate("/");  //it will be not consistent, so alternative we use window until we used the state management
//     window.location = "/"; //temporary solution
//   } catch (error) {
//     toast.error(error?.response?.data?.message);
//   }

//   setIsLoading(false);
// };
