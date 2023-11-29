import { FcAddDatabase } from "react-icons/fc";
import MenuItem from "./MenuItem";
import { GrUserManager } from "react-icons/gr";


const AdminMenu = () => {
    return (
        <div>
            <MenuItem icon={FcAddDatabase}
                label='Add Package'
                address='add-package'
            ></MenuItem>
            <MenuItem icon={GrUserManager}
                label='Manage Users'
                address='manage-users'
            ></MenuItem>
        </div>
    );
};

export default AdminMenu;