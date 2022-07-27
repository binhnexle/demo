import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contact",
  initialState: {
    id: 1,
    tel: "+084 879 806 806",
    address: "66 CMT8 street, DaNang city",
    email: "binh.quatest2@gmail.com",
  },

  reducers: {},
});
export default slice;
