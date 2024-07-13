import { Route, Routes } from "react-router-dom";
import Login  from "./pages/Login";
import User from "./pages/User";
import Register from "./pages/Register";

function HEMPortal() {
  return (
    <div className="">
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
    </div>
  );
}


export default HEMPortal;
