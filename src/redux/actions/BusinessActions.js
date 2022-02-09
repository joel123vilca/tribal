import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import BusinessController from "../controllers/BusinessController";

export const types = {
  GET_BUSINESSES: "GET_BUSINESSES",
  GET_BUSINESS: "GET_BUSINESS",
  SET_BUSINESS: "SET_BUSINESS",
  SET_BUSINESSES: "SET_BUSINESSES",
  CREATE_BUSINESS: "CREATE_BUSINESS",
  UPDATE_BUSINESS: "UPDATE_BUSINESS",
  DELETE_BUSINESS: "DELETE_BUSINESS",
};

export const getBusinesses = createAsyncThunk(
  types.GET_BUSINESSES,
  async (_, { dispatch }) => {
    const response = await BusinessController.getBusiness();
    dispatch(setBusinesses(response));
    return response;
  }
);
export const getBusiness = createAsyncThunk(
  types.GET_BUSINESS,
  async ({ payload }, { dispatch }) => {
    const response = await BusinessController.getBusinessById(payload);
    dispatch(setBusiness(response));
    return response;
  }
);
export const createBusiness = createAsyncThunk(
  types.CREATE_BUSINESS,
  async ({ payload }, { dispatch }) => {
    try {
      const response = await BusinessController.postBusiness(payload);
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const updateBusiness = createAsyncThunk(
  types.UPDATE_BUSINESS,
  async ({ payload }, { dispatch }) => {
    try {
      const response = await BusinessController.putBusiness(payload);
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const deleteBusiness = createAsyncThunk(
  types.DELETE_BUSINESS,
  async ({ payload }, { dispatch }) => {
    try {
      const response = await BusinessController.deleteBusiness(payload);
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const setBusiness = createAction(types.SET_BUSINESS, (business) => ({
  payload: business,
}));

export const setBusinesses = createAction(
  types.SET_BUSINESSES,
  (businesses) => ({
    payload: businesses,
  })
);
