import { createSelector } from "@reduxjs/toolkit";

const avatarSelector = (state) => {
  return state.avatar;
};

const avatarSelectorRemaining = createSelector(avatarSelector, (avatar) => {
  return avatar;
});

export default avatarSelectorRemaining;
