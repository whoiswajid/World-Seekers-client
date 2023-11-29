
import MenuItem from "./MenuItem";
import { GrCheckmark } from "react-icons/gr";


const GuideMenu = () => {
    return (
        <div>
    
            <MenuItem icon={GrCheckmark}
                label='My Assigned Tours'
                address='assigned-tours'
            ></MenuItem>
        </div>
    );
};

export default GuideMenu;