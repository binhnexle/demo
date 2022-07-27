import { createSelector } from "@reduxjs/toolkit";

const languagesSelector = (state) => {
  return state.languages;
};

const languagesSelectorRemaining = createSelector(
  languagesSelector,
  (languages) => {
    return languages;
  }
);

export default languagesSelectorRemaining;
