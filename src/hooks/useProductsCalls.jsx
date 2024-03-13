
import React from "react";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getProductsSuccess } from "../features/productSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useProductsCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic } = useAxios();
  const getProducts = async () => {
    dispatch(fetchStart());
    try {
      const data = await axiosPublic.get("/products");
      console.log(data)
      dispatch(getProductsSuccess(data.data));
      toastSuccessNotify("Get Products Success!")
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Get Products Unseccess")
    }
  };

  return {getProducts};
};

export default useProductsCalls;

