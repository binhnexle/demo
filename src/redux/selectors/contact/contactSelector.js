import { createSelector } from "@reduxjs/toolkit";

const contactSelector = (state) => {
  return state.contact;
};

const contactSelectorRemaining = createSelector(contactSelector, (contact) => {
  return contact;
});

export default contactSelectorRemaining;
