

const Community = () => {
    return (
        <div>
            <br />
            <br />
            <h2 className="text-center text-blue-500 font-extrabold text-3xl">Help Us Building Shajek Old Age Home Community</h2>
            <div >
                <form  className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" name="title" />
                        </div>
                        
                    </div>
                    

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Why You Are Helping</span>
                            </label>
                            <input type="text" name="?" placeholder="Write a short Message" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Amount</span>
                            </label>
                            <input type="text" placeholder="amount" className="input input-bordered" name="price" />

                        </div>
                    </div>
                    <div className="form-control mt-6">

                        <input className="btn bg-blue-400 text-white " type="submit" value="Donate" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Community;