import { useEffect, useState } from "react";
import TourGuideCard from "./TourGuideCard";


const TourGuide = () => {


    const [guides, setGuides] = useState([]);
    useEffect(() => {
        fetch('https://world-seeker-server.vercel.app/guides')
        .then(res => res.json())
        .then(data => setGuides(data))
    }, [])

    return (
        <div>
            <h3 className="text-center text-blue-400 text-3xl font-bold underline">Our Guides</h3>
            <div className="grid md: grid-cols-1 lg:grid-cols-2">
            
            {
                
                    guides.map(guide => <TourGuideCard key={guide._id}
                    guide={guide}
                    ></TourGuideCard>)
                
            }
        </div>
        </div>
    );
};

export default TourGuide;