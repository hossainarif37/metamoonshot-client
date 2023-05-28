import phone from '../../assets/Group 10.png'
import Button from '../../component/Button';
import blur from "../../assets/Ellipse 5.png"

const MassiveCollaboration = () => {
    return (
        <div className='relative'>
            <div className="hero px-10 lg:px-48 ">
                <div className="flex flex-col-reverse lg:flex lg:flex-row justify-between gap-28 ">
                    <img src={phone} className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl mt-[-100px] relative z-0 mx-auto" />
                    <div className='text-[#ddd] '>
                        <h1 className="text-4xl font-semibold text-white">Be Part of <br /> Something Massive</h1>
                        <p className="py-6 text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut.</p>
                        <Button>Join Twitter Live</Button>
                    </div>
                </div>
            </div>
            <img className='hidden lg:block z-10 w-[560px] absolute left-[-150px] bottom-0 mb-[-200px]' src={blur} alt="" />
            <img className='hidden lg:block z-0 w-[650px] absolute right-[-72px]  bottom-0 mb-[-500px]' src={blur} alt="" />
        </div>
    );
};

export default MassiveCollaboration;