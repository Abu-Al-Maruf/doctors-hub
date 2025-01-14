import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DoctorProfile from "../pages/DoctorProfile/DoctorProfile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Apponment from "../pages/Appoinment/Apponment";
import AboutUs from "../pages/AboutUs/AboutUs";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import DashboardLayout from "../layouts/DashboardLayout";
import Appoinments from "../pages/Dashboard/Appoinments/Appoinments";
import ManageDoctors from "../pages/Dashboard/Admin/ManageDoctors/ManageDoctors";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AddDoctor from "../pages/Dashboard/Admin/AddDoctor/AddDoctor";

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
        element: <PrivateRoute><Apponment /></PrivateRoute>,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "doctor-profile/:id",
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
  {
    path: "dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "appoinments",
        element: <Appoinments />,
      },
      // admin routes 
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "add-doctor",
        element: <AddDoctor />,
      },
      {
        path: "manage-doctors",
        element: <ManageDoctors />,
      },


    ],
  },
])

export default router;
