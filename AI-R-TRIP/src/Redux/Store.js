import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import LoginSlicer from "./LoginSlicer";

export const store = configureStore({
  reducer: {
    login: LoginSlicer,
  },
});

export default store;
