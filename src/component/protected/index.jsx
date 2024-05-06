import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProfile } from "../../redux/actions/auth";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // get user profile if we have token
    dispatch(getProfile(navigate, null, "/login"));
  }, [dispatch, navigate]);

  return children;
};

export default Protected;

// const getProfile = async (token) => {
//   if (!token) {
//     return (window.location = "/login");
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
//   } catch (error) {
//     // because token is not valid, we will delete it from local storage
//     localStorage.removeItem("token");
//     window.location = "/login";
//   }
// };

// useEffect(() => {
//   // get user profile if we have token
//   const token = localStorage.getItem("token");
//   getProfile(token);
// }, []);
