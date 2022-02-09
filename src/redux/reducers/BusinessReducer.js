import { createReducer } from "@reduxjs/toolkit";

import * as businessActions from "../actions/BusinessActions";

const initialState = {
  businesses: [],
  business: {},
};

const BusinessReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(businessActions.setBusinesses, (state, { payload }) => ({
      ...state,
      businesses: payload,
    }))
    .addCase(businessActions.setBusiness, (state, { payload }) => ({
      ...state,
      business: payload,
    }));
});

export default BusinessReducer;
