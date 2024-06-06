import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import { useContext } from "react";

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    if(loading){
        return <span className="loading loading-spinner loading-lg ml-[50%] "></span>

    }
    if(user){
        return children
       }
       return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRouter;