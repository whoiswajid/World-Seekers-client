import { useEffect, useState } from "react";
import Card from "./Card";

const Tours = () => {

    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://world-seeker-server.vercel.app/tours')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [])

    return (
        
       <div>
        <h3 className="text-center text-blue-400 text-3xl font-bold underline">Our Packages</h3>
        <br />
         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            
            {
                tours.map(tour=><Card key={tour._id}
                tour={tour}
                ></Card> )
            }
        </div>
       </div>
    );
};

export default Tours;