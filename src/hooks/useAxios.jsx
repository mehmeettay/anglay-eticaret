
import axios from "axios";
import React from "react";
// import { useSelector } from "react-redux";

const useAxios = () => {
  //   const { token } = useSelector((state) => state.auth);
  //   // console.log(token)
  //   const axiosWithToken = axios.create({
  //     baseURL: `${process.env.REACT_APP_BASE_URL}`,
  //     headers: { Authorization:`Token ${token}` },
  //   });

  const axiosPublic = axios.create({
    baseURL: "https://fakestoreapi.com",
  });
  return { axiosPublic };
};

export default useAxios;

import axios from "axios";
import React from "react";
// import { useSelector } from "react-redux";

const useAxios = () => {
  //   const { token } = useSelector((state) => state.auth);
  //   // console.log(token)
  //   const axiosWithToken = axios.create({
  //     baseURL: `${process.env.REACT_APP_BASE_URL}`,
  //     headers: { Authorization:`Token ${token}` },
  //   });

  const axiosPublic = axios.create({
    baseURL: "https://fakestoreapi.com",
  });
  return { axiosPublic };
};

export default useAxios;
