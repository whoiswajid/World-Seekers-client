import { Navigate } from "react-router-dom";
import useRole from "../Hooks/userRole";
import Loader from "../Pages/Shared/Loader/Loader";


const AdminRoute = ({children}) => {
    const [role,isLoading] = useRole()

    if (isLoading) return <Loader></Loader>
    if(role === 'admin') return children
    return  <Navigate to='/'  replace='true' ></Navigate>
};

export default AdminRoute;