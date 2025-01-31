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
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import DashboardLayout from "../layouts/DashboardLayout";
import Appoinments from "../pages/Dashboard/Appoinments/Appoinments";
import ManageDoctors from "../pages/Dashboard/Admin/ManageDoctors/ManageDoctors";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AddDoctor from "../pages/Dashboard/Admin/AddDoctor/AddDoctor";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import AdminRoute from "./AdminRoute";


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
        element: <PrivateRoute><DoctorProfile /></PrivateRoute>,
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
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "appoinments",
        element: <Appoinments />,
      },
      // admin routes 
      {
        path: "admin-home",
        element: <AdminRoute><AdminHome /></AdminRoute>,
      },
      {
        path: "all-users",
        element: <AdminRoute><AllUsers /></AdminRoute>,
      },
      {
        path: "add-doctor",
        element: <AdminRoute><AddDoctor /></AdminRoute>,
      },
      {
        path: "manage-doctors",
        element: <AdminRoute><ManageDoctors /></AdminRoute>,
      },


    ],
  },
])

export default router;
