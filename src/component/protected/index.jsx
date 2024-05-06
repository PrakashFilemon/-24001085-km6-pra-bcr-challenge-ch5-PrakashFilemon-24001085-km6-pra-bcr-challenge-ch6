import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/auth";
import PropTypes from "prop-types";

const Protected = ({ children, roles }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // get user profile if we have token
    dispatch(getProfile(navigate, null, "/login"));
  }, [dispatch, navigate]);

  useEffect(() => {
    if (user?.role) {
      //Check if roles have acces to this page
      if (roles?.length > 0) {
        if (!roles?.includes(user?.role)) {
          navigate("/");
        }
      }
    }
  }, [navigate, roles, user]);
  return children;
};

Protected.protoTypes = {
  roles: PropTypes.array,
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
