import featured1 from '../../assets/Rectangle 8.png'
import featured2 from '../../assets/Rectangle 9.png'
import featured3 from '../../assets/Rectangle 10.png'
import FeturedCard from './FeturedCard';
import cheese1 from '../../assets/Cheese Half 7.png'
import cheese2 from '../../assets/Cheese Half 4.png'

const Featured = () => {
    const featuredInfo = [
        {
            img: featured1,
        },
        {
            img: featured2,
        },
        {
            img: featured3,
        },
    ]
    return (
        <div className='pb-20'>
            <div className='bg-[#292337] w-10/12 lg:w-9/12 mx-auto rounded-2xl py-14 relative'>
                <img className='w-28  rotate-[18deg] absolute left-[-28px] top-[-42px]' src={cheese1} alt="" />
                <div className='lg:w-4/6 text-center mx-auto '>
                    <h1 className="text-white font-semibold text-3xl lg:text-4xl">Featured AMAs</h1>
                    <p className="text-[#ddd] text-sm py-8">Metamoonshot is a top ranked influencer communitry for crypto investors <br /> We Feature crypto projects through AMA</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5  lg:px-12'>
                    {
                        featuredInfo.map((info, i) => <FeturedCard key={i} info={info} />)
                    }
                </div>
                <div className='flex gap-2 justify-center mt-6 '>
                    <div className='bg-white w-3 h-3 rounded-full'></div>
                    <div className='border  w-3 h-3 rounded-full'></div>
                    <div className='border  w-3 h-3 rounded-full'></div>
                    <div className='border  w-3 h-3 rounded-full'></div>
                </div>
                <img className='w-28 absolute bottom-[-30px] right-[-43px]' src={cheese2} alt="" />
            </div>

        </div>
    );
};

export default Featured;