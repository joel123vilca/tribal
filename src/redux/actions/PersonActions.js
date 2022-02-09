import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import PersonController from "../controllers/PersonController";

export const types = {
  GET_PERSON: "GET_PERSON",
  SET_PEOPLE: "SET_PEOPLE",
  SET_PERSON: "SET_PERSON",
  CREATE_PERSON: "CREATE_PERSON",
  UPDATE_PERSON: "UPDATE_PERSON",
  DELETE_PERSON: "DELETE_PERSON",
};

export const getPeople = createAsyncThunk(
  types.GET_PERSON,
  async (payload, { dispatch }) => {
    const response = await PersonController.getPeople(payload);
    dispatch(setPeople(response));
    return response;
  }
);

export const createPerson = createAsyncThunk(
  types.CREATE_PERSON,
  async ({ payload }, { dispatch }) => {
    try {
      const response = await PersonController.postPerson(payload);
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const updatePerson = createAsyncThunk(
  types.UPDATE_PERSON,
  async ({ payload }, { dispatch }) => {
    try {
      const response = await PersonController.putPerson(payload);
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const deletePerson = createAsyncThunk(
  types.DELETE_PERSON,
  async ({ payload }, { dispatch }) => {
    try {
      const response = await PersonController.deletePerson(payload);
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const setPeople = createAction(types.SET_PEOPLE, (people) => ({
  payload: people,
}));

export const setPerson = createAction(types.SET_PERSON, (person) => ({
  payload: person,
}));
