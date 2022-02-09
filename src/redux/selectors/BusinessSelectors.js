import { createSelector } from "@reduxjs/toolkit";

export const businessStateSelector = createSelector(
  (state) => state.business,
  (business) => business
);

export const businessesSelector = createSelector(
  businessStateSelector,
  (state) => state.businesses
);

export const businessSelector = createSelector(
  businessStateSelector,
  (state) => state.business
);
