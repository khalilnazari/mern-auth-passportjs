import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-gray-200 mb-4 py-5 px-2">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center">
          <div>
            <Link to="" className="font-bold text-lg">
              #MERNAUTH
            </Link>
          </div>

          <div className="flex gap-3 ml-8">
            <Link to=".">Home</Link>
            <Link to="about">About</Link>
          </div>

          <div className="flex gap-3 ml-auto">
            <Link to="dashboard">Dashboard</Link>
            <Link to="profile">Profile</Link>
            <Link to="login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
