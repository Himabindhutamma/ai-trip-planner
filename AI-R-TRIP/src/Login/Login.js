import React from "react";
import { login, logout } from "../Redux/LoginSlicer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isLogin, username, email, mobilenumber, password, role } =
    useSelector((state) => state.login);
  const navigate = useNavigate();
  console.log(isLogin, username, email, mobilenumber, role);
  const dispatch = useDispatch();
  const handleLogin = () => {
    const userData = {
      username: "Himabindhu",
      email: "tammahimabindhu@gmail.com",
      mobilenumber: "7013054984",
      password: "Amma@123",
      role: "admin",
    };
    dispatch(login(userData));
    navigate("/profilepages");
  };
  return (
    <>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
