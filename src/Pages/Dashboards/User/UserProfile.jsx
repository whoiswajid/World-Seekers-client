import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/userRole";


const UserProfile = () => {
    const { user } = useAuth()
    const [role] = useRole()
    console.log(user)


    const handleAddStory = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const story = form.story.value;
        

        const newStory = { name, img, story }

        console.log(newStory)

        fetch(``, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStory)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Story has been added",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })


    }



    return (
        <div className='flex justify-center items-center h-screen'>
            <div >

                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={user.photoURL}
                            className='mx-auto object-cover  h-24 w-24  border-2 border-white '
                        />
                    </a>

                    <p className='p-2 px-4 text-xs text-white bg-blue-500 rounded-full'>
                        {role && role.toUpperCase()}
                    </p>
                    <p className='mt-2 text-xl font-medium text-gray-800 '>
                        User Id: {user.uid}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                            <p className='flex flex-col'>
                                Name
                                <span className='font-bold text-black '>
                                    {user.displayName}
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Email
                                <span className='font-bold text-black '>{user.email}</span>
                            </p>
                        </div>
                    </div>
                    <div >

                        <h2 className=" text-center text-blue-300 font-bold">Add Your Story To Inspire Others</h2>
                        <form onSubmit={handleAddStory} className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" name="name" />
                                </div>

                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Add Your Story</span>
                                    </label>
                                    <input type="text" name="story" placeholder="Add your Story" className="input input-bordered" />
                                </div>
                                <div className="form-control md:flex">
                                    <label className="label">
                                        <span className="label-text">Add Image</span>
                                    </label>
                                    <input type="text" placeholder="Add your Photo url" className="input input-bordered" name="img" />
                                </div>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn bg-blue-400 text-white " type="submit" value="Donate" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default UserProfile;