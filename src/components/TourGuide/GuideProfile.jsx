import { useLoaderData } from "react-router-dom";


const GuideProfile = () => {

    const guide = useLoaderData();
    const {img,name ,email, from, contact, education, skills} = guide;
    

    return (
        <div>
            <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                    <img src={img} alt="" className="self-center flex-shrink-0 w-24 h-24 border  md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">Name: {name}</h4>
                        <h4 className="text-lg font-semibold text-center md:text-left">Email Address : {email}</h4>
                        <h4 className="text-lg font-semibold text-center md:text-left">From: {from}</h4>
                        <h4 className="text-lg font-semibold text-center md:text-left">Phone: {contact}</h4>
                        <h4 className="text-lg font-semibold text-center md:text-left">Education: {education}</h4>
                        <h4 className="text-lg font-semibold text-center md:text-left">Skills: {skills}</h4>
                        
                    </div>
                </div>
                <div className="flex justify-center pt-4 space-x-4 align-center">
                
                </div>
            </div>
        </div>
    );
};

export default GuideProfile;