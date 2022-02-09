import { createReducer } from "@reduxjs/toolkit";

import * as personActions from "../actions/PersonActions";

const initialState = {
  people: [],
};

const PersonReducer = createReducer(initialState, (builder) => {
  builder.addCase(personActions.setPeople, (state, { payload }) => ({
    ...state,
    people: payload,
  }));
});

export default PersonReducer;
