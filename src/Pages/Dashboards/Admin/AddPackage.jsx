import Swal from "sweetalert2";


const AddPackage = () => {

    const handleAddPackage = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const images = form.images.value;
        const tourDetails = form.tourDetails.value;
        const price = form.price.value;
        const category = form.category.value;
        const tourPlan1 = form.tourPlan1.value;
        const tourPlan2 = form.tourPlan2.value;

        const newPackage = { title, images, tourDetails, tourPlan1, tourPlan2, price, category }

        console.log(newPackage)

        fetch(`https://world-seeker-server.vercel.app/tours`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Package has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }



    return (
        <div>
            <div >
                <form onSubmit={handleAddPackage} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tour Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" name="title" />
                        </div>
                        <div className="form-control md:flex">
                            <label className="label">
                                <span className="label-text">Add Image</span>
                            </label>
                            <input type="text" placeholder="Add your Photo url" className="input input-bordered" name="images" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tour Category</span>
                        </label>
                        <input type="text" placeholder="Category" className="input input-bordered" name="category" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tour Details</span>
                            </label>
                            <input type="text" name="tourDetails" placeholder="details" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="price" className="input input-bordered" name="price" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day 1</span>
                            </label>
                            <input type="text" placeholder="Day 1 Plans" className="input input-bordered" name="tourPlan1" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Day 2</span>
                            </label>
                            <input type="text" placeholder="Day 2 Plans" className="input input-bordered" name="tourPlan2" />

                        </div>

                    </div>
                    <div className="form-control mt-6">

                        <input className="btn bg-blue-400 text-white " type="submit" value="Add" />
                    </div>
                </form>
            </div>
        </div>


    );
};

export default AddPackage;