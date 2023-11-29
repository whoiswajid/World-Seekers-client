

import MenuItem from "./MenuItem";
import { GrBook, GrFavorite, GrImage } from "react-icons/gr";

const TouristMenu = () => {
    return (
        <div>
            <div>
                <MenuItem icon={GrBook}
                    label='My Bookings'
                    address='my-bookings'
                ></MenuItem>
                <MenuItem icon={GrFavorite}
                    label='Wish List'
                    address='wish-list'
                ></MenuItem>
                <MenuItem icon={GrImage}
                    label='My Profile'
                    address='user-profile'
                ></MenuItem>
            </div>
        </div>
    );
};

export default TouristMenu;