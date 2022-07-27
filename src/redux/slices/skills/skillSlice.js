import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "skills",
  initialState: [
    {
      id: 1,
      title: "ENGLISH",
      percentage: 90,
    },
    {
      id: 2,
      title: "SPANISH",
      percentage: 80,
    },
    {
      id: 3,
      title: "FRENCH",
      percentage: 60,
    },
  ],

  reducers: {},
});
export default slice;
