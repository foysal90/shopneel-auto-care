import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    
    if (loading) {
      return <h1 className="text-red-800 font-extrabold text-5xl"> data is loading, please wait.............</h1>
      
    }
    if (user?.email) {
      return children;
      
    }
    return <Navigate to='/login' state={{ from: location}} replace></Navigate>
    };

export default PrivateRoute;
