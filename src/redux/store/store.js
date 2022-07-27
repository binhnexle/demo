import { configureStore } from "@reduxjs/toolkit";
import avatarSlice from "../slices/avatar/avatarSlice";
import contactSlice from "../slices/contact/contactSlice";
import languagesSlice from "../slices/languages/languagesSlice";
const reduxStore = configureStore({
  reducer: {
    avatar: avatarSlice.reducer,
    contact: contactSlice.reducer,
    languages: languagesSlice.reducer,
  },
});

export { reduxStore };
