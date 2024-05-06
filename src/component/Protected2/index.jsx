import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProfile } from "../../redux/actions/auth";

const Protected2 = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(navigate, "/", null));
  }, [dispatch, navigate]);

  return children;
};

export default Protected2;

// const getProfile = async (token) => {
//   if (!token) {
//     return;
//   }

//   let config = {
//     method: "get",
//     url: `${import.meta.env.VITE_BACKEND_API}/api/auth/profile`,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     await axios.request(config);
//     window.location = "/"; // redirect to home
//   } catch (error) {
//     // because token is not valid, we will delete it from local storage
//     localStorage.removeItem("token");
//   }
// };

// useEffect(() => {
//   // get user profile if we have token
//   const token = localStorage.getItem("token");
//   getProfile(token);
// }, []);
