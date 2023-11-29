

import TourGuide from "../../components/TourGuide/TourGuide";
import Bookings from "./Bookings";
import { useLoaderData } from "react-router-dom";

const TourDetails = () => {

    const tour = useLoaderData();

    const { tourDetails,price ,images, images1,images2, tourPlan1,tourPlan2, title} = tour;
    

    return (
        <div>
           
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src={images} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={images1} />

                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={images2} />
                </div>
            </section>
            <div>
                <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 dark:bg-gray-800 dark:text-gray-50">
                    <div className="w-full mx-auto space-y-4">
                        <h1 className="text-5xl font-bold leadi">{title}</h1>
                        <div className="flex flex-wrap space-x-2 text-sm dark:text-gray-400">
                            <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">{tour?.category}</a>
                            <a rel="noopener noreferrer" href="#" className="p-1 text-yellow-500 hover:underline">{price}</a>

                        </div>
                    </div>
                    <div className="dark:text-gray-100">
                        <p>{tourDetails}</p>
                    </div>
                </article>
            </div>
            <div>
                <ul className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">

                    <li>
                        <article>
                            <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
                                <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">: {tourPlan1}.</h3>
                                <time className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-blue-400 font-bold">Day 1</time>

                            </a>
                        </article>
                    </li>
                    <li>
                        <article>
                            <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
                                <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">: {tourPlan2}</h3>
                                <time className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-blue-400 font-bold">Day 2</time>

                            </a>
                        </article>
                    </li>
                </ul>
                <h1 className="text-blue-400 font-bold font-serif text-center text-3xl">Our Tour Guides</h1>
                <TourGuide></TourGuide>

                <Bookings></Bookings>
            </div>
        </div>
    );
};

export default TourDetails;