import { useEffect, useState } from "react";
import AssigenToursRow from "./AssigenToursRow";



const AssignedTours = () => {


    const [assigneds, setAssigneds] = useState([]);

    const url = `https://world-seeker-server.vercel.app/bookings?GuideName`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAssigneds(data))
    }, [])
    return (
        <div>
            <h1>my Assigned tours {assigneds.length}</h1>
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
                            assigneds.map(assigned => <AssigenToursRow key={assigned._id} assigned={assigned}></AssigenToursRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignedTours;