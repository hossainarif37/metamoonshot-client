import warqube from "../../assets/image 5.png"
import transparent from "../../assets/transperent 2-1.png"
import mask from "../../assets/Mask group.png"
import mask1 from "../../assets/Mask group-1.png"
const UpcomingEvent = () => {
    return (
        <div className="px-2 lg:px-44">
            <h1 className="text-3xl lg:text-4xl  font-semibold text-white text-center pt-20 pb-6 lg:pb-10">Upcoming AMAs</h1>
            <div className="flex flex-col lg:flex-row text-white lg:justify-between border-t-[14px] lg:border-t-0 lg:border-l-[14px] border-secondary bg-[#221E30] relative">
                <div className="p-2 lg:p-8 grid grid-cols-2 lg:grid-cols-1 gap-2">
                    <div>
                        <p>AMA with</p>
                        <h1 className="text-2xl pt-2">WARQUBE</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className="w-18 h-10" src={warqube} alt="" />
                        <span className="text-3xl">X</span>
                        <img className="w-16" src={transparent} alt="" />
                    </div>
                    <div>
                        <div className="flex gap-2">
                            <h1 className="text-3xl flex items-center">8<sup className="text-xs text-[#ddd] ml-1">TH</sup></h1>
                            <h1 className="text-2xl">August</h1>
                        </div>
                        <h2 className="text-[#B2896B] font-semibold">10 AM UTC</h2>
                    </div>
                    <div className=" font-semibold lg:mt-3">
                        <h1 className="text-2xl">Reward: <span className="text-[#AE1ADE]">100$</span></h1>
                    </div>
                </div>
                <div className="flex items-center gap-16 px-12 pb-6 lg:pb-0">
                    <div>
                        <img className=" w-40 mb-3" src={mask} alt="" />
                        <p>Guest: Amal Quber</p>
                    </div>
                    <div>
                        <img className=" w-40 mb-3" src={mask1} alt="" />
                        <p>Guest: Nick Harris</p>
                    </div>
                </div>
                <div className="text-[#ddd] bg-secondary p-5 lg:p-8 flex flex-row justify-between lg:flex-col  gap-4">
                    <div>
                        <h1 className="text-3xl font-semibold ">00</h1>
                        <span>Days</span>
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold ">00</h1>
                        <span>Hours</span>
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold">00</h1>
                        <span>Minutes</span>
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold">00</h1>
                        <span>Seconds</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvent;