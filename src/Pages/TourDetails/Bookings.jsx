import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



const Bookings = () => {

    const tour = useLoaderData();
    const { _id, price, title ,images } = tour;
    const { user } = useAuth();

    const [guide, setGuide] = useState([]);
    console.log(guide);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const apiUrl = `https://world-seeker-server.vercel.app/guides`;
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }


                const result = await response.json();


                setGuide(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleBookService = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;
        const guide = form.guide.value;
        const booking = {
            clientName: name,
            images,
            email,
            date,
            package_name: title,
            package_id: _id,
            price: price,
            GuideName: guide
        }
        console.log(booking);

        fetch('https://world-seeker-server.vercel.app/bookings',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Bookings has been added",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
    
        })
        

    }




    return (
        <div>
            <div>
                <div >
                    <form onSubmit={handleBookService} className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tourist Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" name="name" defaultValue={user?.displayName} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tourist img</span>
                                </label>
                                <img name='img' src={user?.photoURL} className="w-10  h-10 rounded-2xl " alt="" />

                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tourist Email</span>
                            </label>
                            <input type="email" placeholder="Service Provider Email" className="input input-bordered" defaultValue={user?.email} name="email" />
                        </div>
                        <div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Guide Name</span>
                                </label>

                                <select name="guide" className="select select-info w-full max-w-xs">
                                    {
                                        guide?.map((guid, index) => {
                                            return <option value={guid.name}>{guid.name}</option>
                                        })
                                    }
                                    </select >

                            </div>



                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" placeholder="Date" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="price" className="input input-bordered" defaultValue={'$' + price} name="price" />

                            </div>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn bg-blue-400 text-white " type="submit" value="Confirm Booking" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bookings;