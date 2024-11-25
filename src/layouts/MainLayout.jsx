import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/Home/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1380px] mx-auto ">
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
