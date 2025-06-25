import { Navigate, Outlet } from "react-router";
import Cookies from "js-cookie";

export default function PrivateRoute() {
  const token = Cookies.get("authToken");
  
  if (!token) {
   return <Navigate to="/signIn" replace />;
   
  }
  return <Outlet />;
}
