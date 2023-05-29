import banner from '../../assets/Group 45.png'
import Button from '../../component/Button';
import totalMembers from '../../assets/Group 9.png'
import bannerBlackBg from '../../assets/bannerBlackBg.png'
import bannerBrownBg from '../../assets/bannerBrownBg.png'
import blur from '../../assets/Ellipse 5.png'

const Banner = () => {
    return (
        <div className="">
            <div className='relative '>
                <div className="flex flex-col lg:flex-row items-start px-10 lg:px-44 ">
                    {/* <img src={banner} className=" rounded-lg lg:w-[900px] z-30 lg:mb-20 mt-6" /> */}
                    <div className=' text-[#ddd] my-7'>
                        <h1 className="text-4xl lg:text-5xl font-semibold text-white  leading-tight">Community for <br /> crypto investors</h1>
                        <p className="py-6 text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut</p>
                        <Button>Join Now</Button>
                        <div className='flex gap-5 items-center pt-8'><img className='w-20' src={totalMembers} alt="" /> <span>150k+ membership</span></div>
                    </div>
                    <img src={banner} className="rounded-lg lg:w-[900px] z-30 lg:mb-20 " />


                </div>
                <img className='absolute bottom-8 z-0' src={bannerBrownBg} alt="" />
                <img className='absolute bottom-2 z-0' src={bannerBlackBg} alt="" />
            </div>

        </div>
    );
};

export default Banner;