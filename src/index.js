import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import reportWebVitals from "./reportWebVitals";
import ProfilePage from "./Pages/ProfilePage";
import ProfilePages from "./Pages/ProfilePages";
import FlightSearch from "./Pages/Flight/FlightSearch/FlightSearch";
import Login from "./Login/Login";
import Layout from "./Pages/Layout"; // Import the Layout component
import ProtectedRoute from "./Login/ProtectedRoutes"; // Import the ProtectedRoute component
import Flight from "./Pages/Flight/Flight";
import Hotel from "./Pages/Hotel/Hotel";
import Bus from "./Pages/Bus/Bus";
import Activity from "./Pages/Activities/Activity";
import HotelSearch from "./Pages/Hotel/HotelSearch/HotelSearch";
import HotelDetails from "./Pages/Hotel/HotelSearch/HotelDetails";
import HotelGallery from "./Pages/Hotel/HotelSearch/HotelGallery";
import BusSearch from "./Pages/Bus/BusSearch/BusSearch";
import BusPayment from "./Pages/Bus/BusSearch/BusPayment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the Layout component as the wrapper
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/flight",
        element: <Flight />,
      },
      {
        path: "/flightsearch",
        element: <FlightSearch />,
      },
      {
        path: "/hotelsearch",
        element: <HotelSearch />,
      },
      {
        path: "/bussearch",
        element: <BusSearch />,
      },
      {
        path: "/buspayment",
        element: <BusPayment />,
      },
      {
        path: "/hoteldetails",
        element: <HotelDetails />,
      },
      {
        path: "/gallery",
        element: <HotelGallery />,
      },
      {
        path: "/hotel",
        element: <Hotel />,
      },
      {
        path: "/bus",
        element: <Bus />,
      },
      {
        path: "/activity",
        element: <Activity />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute roles={["admin", "user"]}>
            {" "}
            {/* Adjust roles as needed */}
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "profilepages",
        element: (
          <ProtectedRoute roles={["admin"]}>
            {" "}
            {/* Only admins can access */}
            <ProfilePages />
          </ProtectedRoute>
        ),
        children: [
          {
            path: ":profileId",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
