import { Link } from "react-router-dom"


/* eslint-disable react/prop-types */
const Card = ({ tour }) => {

    const { _id , tourDetails,tourType,price ,images} = tour;
    return (



        <div className='col-span-1 cursor-pointer group'>
            
            

            <div className=" 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl shadow-lg">
                <img
                    className='object-cover w-full rounded-t-md  group-hover:scale-110 transition'
                    src={images}
                    alt=''
                />
                
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <span className="block text-xs font-medium tracki uppercase text-blue-400">{tourType}</span>
                        <span className="block text-xs font-medium tracki uppercase text-yellow-500">{price}</span>

                        <p className="dark:text-gray-100">
                            {tourDetails}
                        </p>

                    </div>
                    <Link to={`/tour/${_id}`} type="Link" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 text-white">view Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Card