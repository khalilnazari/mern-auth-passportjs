import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1100px] mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
