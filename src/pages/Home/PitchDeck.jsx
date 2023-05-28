import pitchdeck from '../../assets/pitchdeck.png'
import Button from '../../component/Button';
import blur from "../../assets/Ellipse 5.png"


const PitchDeck = () => {
    return (
        <div className="hero text-[#ddd] relative">
            <div className="flex text-center lg:text-start flex-col-reverse lg:flex-row-reverse items-center px-6 lg:px-44 py-14 lg:py-24">
                <img src={pitchdeck} className="max-w-xs lg:max-w-sm mt-6 lg:mt-0 rounded-lg" />
                <div className='lg:pr-40 '>
                    <h1 className="text-4xl font-semibold text-white">Add Our Pitchdeck</h1>
                    <p className="py-6 text-[#ddd] text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut.</p>
                    <div className='flex mx-auto lg:mx-0 gap-4 bg-[#242133] rounded-xl p-5 w-8/12 justify-center mb-8'>
                        <div>
                            <h1 className='text-3xl font-semibold'>25k+</h1>
                            <p className='text-sm text-center'>Telegram</p>
                        </div>
                        <div>
                            <h1 className='text-3xl font-semibold'>320k+</h1>
                            <p className='text-sm text-center'>Twitter</p>
                        </div>
                        <div>
                            <h1 className='text-3xl font-semibold'>2k+</h1>
                            <p className='text-sm text-center'>Discord</p>
                        </div>
                    </div>
                    <Button>Join Our Biggest Community</Button>
                </div>
            </div>
            <img className='hidden lg:block z-10 w-[560px] absolute left-[-150px] bottom-0 mb-[-200px]' src={blur} alt="" />
            <img className='hidden lg:block z-0 w-[650px] absolute right-[-72px]  bottom-0 mb-[-350px]' src={blur} alt="" />
        </div>
    );
};

export default PitchDeck;