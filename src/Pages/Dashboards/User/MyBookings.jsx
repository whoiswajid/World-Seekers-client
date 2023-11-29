import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import MyBookingsRow from "./MyBookingsRow";


const MyBookings = () => {

    const { user } = useAuth();
    const [books, setBooks] = useState([]);

    const url = `https://world-seeker-server.vercel.app/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        
                        <thead>
                            <tr>

                                <th>img</th>
                                <th>Name</th>
                                <th>Package</th>
                                <th>Guide Name</th>
                                <th>Date</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               books.map(booking =><MyBookingsRow key={booking._id}
                               booking={booking}
                               ></MyBookingsRow>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;