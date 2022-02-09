import { createSelector } from "@reduxjs/toolkit";

export const personStateSelector = createSelector(
  (state) => state.person,
  (person) => person
);

export const peopleSelector = createSelector(
  personStateSelector,
  (state) => state.people
);
