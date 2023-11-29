/* eslint-disable react/prop-types */
 import { Navigate } from "react-router-dom";

 import Loader from "../Pages/Shared/Loader/Loader";
 import useRole from "../Hooks/userRole";


 const GuideRoute = ({children}) => {


   const [role,isLoading] = useRole()
   
    
    if (isLoading) return <Loader></Loader>
    if(role === 'guide') return children
    return  <Navigate  to='/'  replace='true' ></Navigate>
            
        
    
 };

 export default GuideRoute;