

const Video = () => {
    return (
        <div>

            <section className="py-6 dark:bg-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/2cNBJSL/rangamati-jorna-pi-2.jpg" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/GMHshSQ/9880772-largest-tea-gardens-Bangladesh.jpg" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/M7RbXMT/blogi-JR0-K1s-WVNFzin-GC-l4r3-Ids-VLyx-Zfkr.jpg" />
                        <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/rH14xwh/aerial-view-sandy-beach-with-tourists-swimming-beautiful-clear-sea-water-sumilon-island-beach-landin.jpg" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Video;