import axios from "axios";
import { toast } from "react-toastify";
import { setCars, setCar } from "../reducers/cars";

export const getCars = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/car`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setCars(data));
  } catch (error) {
    //Because token is not valid, we will delete it from local storage
    toast.error(error?.response?.data?.message);
  }
};

export const getCar = (navigate, id) => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/car/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setCar(data));
  } catch (error) {
    //Because token is not valid, we will delete it from local storage
    toast.error(error?.response?.data?.message);
    navigate("/");
  }
};

export const addNewCar =
  (
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
    setIsloading
  ) =>
  async (dispatch, getState) => {
    const { token } = getState().auth;

    let data = new FormData();
    data.append("plate", plate);
    data.append("manufacture", manufacture);
    data.append("model", model);
    data.append("rentPerDay", rentPerDay);
    data.append("capacity", capacity);
    data.append("description", description);
    data.append("carsize_id", carsize_id);
    data.append("availableAt", availableAt);
    data.append("transmission", transmission);
    data.append("available", available);
    data.append("typeCar", typeCar);
    data.append("Year", Year.toString());
    if (image) {
      data.append("image", image);
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/car`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      toast.success("Car added successfully!");
      dispatch(getCars());
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    setIsloading(false);
  };

export const EditCar =
  (
    id,
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
    setIsloading
  ) =>
  async (dispatch, getState) => {
    const { token } = getState().auth;

    let data = JSON.stringify({
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
    });

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/car/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      toast.success("Update Data successfully!");
      dispatch(getCars());
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    setIsloading(false);
  };

export const deleteCarId = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/car/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    toast.success("Delete Data successfully!");
    dispatch(getCars());
  } catch (error) {
    //Because token is not valid, we will delete it from local storage
    toast.error(error?.response?.data?.message);
  }
};

// export const EditCar =
//   (
//     id,
//     navigate,
//     plate,
//     manufacture,
//     model,
//     rentPerDay,
//     capacity,
//     description,
//     carsize_id,
//     availableAt,
//     transmission,
//     available,
//     typeCar,
//     Year,
//     setIsloading
//   ) =>
//   async (dispatch, getState) => {
//     const { token } = getState().auth;

//     let data = new FormData();
//     data.append("plate", plate);
//     data.append("manufacture", manufacture);
//     data.append("model", model);
//     data.append("rentPerDay", rentPerDay);
//     data.append("capacity", capacity);
//     data.append("description", description);
//     data.append("carsize_id", carsize_id);
//     data.append("availableAt", availableAt);
//     data.append("transmission", transmission);
//     data.append("available", available);
//     data.append("typeCar", typeCar);
//     data.append("Year", Year);

//     let config = {
//       method: "put",
//       maxBodyLength: Infinity,
//       url: `${import.meta.env.VITE_BACKEND_API}/api/car/${id}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       data: data,
//     };

//     try {
//       const response = await axios.request(config);
//       console.log(JSON.stringify(response.data));
//       toast.success("Update Data successfully!");
//       dispatch(getCars());
//       navigate("/");
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//     setIsloading(false);
//   };

// const [cars, setCars] = useState([]);
// const [isLoading, setIsLoading] = useState(false);
// const token = localStorage.getItem("token");

// const getCar = async () => {
//   let config = {
//     method: "get",
//     maxBodyLength: Infinity,
//     url: `${import.meta.env.VITE_BACKEND_API}/api/car`,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const response = await axios.request(config);
//     setCars(response.data.data);
//     setIsLoading(true);
//   } catch (error) {
//     //Because token is not valid, we will delete it from local storage
//     toast.error(error?.response?.data?.message);
//   }
// };

// useEffect(() => {
//   //Get user from token if we have token
//   if (token) {
//     getCar();
//   }
// }, [token]); //Update data if token change
