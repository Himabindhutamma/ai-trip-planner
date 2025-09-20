import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  username: "",
  email: "",
  mobilenumber: "",
  password: "",
  role: "admin",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.mobilenumber = action.payload.mobilenumber;
      state.password = action.payload.password;
      state.role = action.payload.role;
      localStorage.setItem("login", JSON.stringify(state));
    },
    logout: (state) => {
      state.isLogin = false;
      state.username = null;
      state.email = null;
      state.mobilenumber = null;
      state.password = null;
      localStorage.clear();
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
