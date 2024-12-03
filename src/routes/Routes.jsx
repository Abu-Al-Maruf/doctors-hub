import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DoctorProfile from "../pages/DoctorProfile/DoctorProfile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Apponment from "../pages/Appoinment/Apponment";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "appoinment",
        element: <Apponment />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "doctor-profile/:doctorId",
        element: <DoctorProfile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
])

export default router;
