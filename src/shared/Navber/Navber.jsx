import { Link } from "react-router-dom";
import logo from "../../assets/meetamoon.png"
import telegram from '../../assets/bxl_telegram.svg'
import twitter from '../../assets/ant-design_twitter-outlined.svg'
import discord from '../../assets/akar-icons_discord-fill.svg'
import youtube from '../../assets/ant-design_youtube-filled.svg'

const Navber = () => {
    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/review'>AMA Review</Link></li>
        <li><Link to='/partners'>Partners</Link></li>
        <li><Link to='/success-stories'>Success Stories</Link></li>
    </>
    return (
        // <div className="navbar text-[#ddd] py-7 lg:px-40 sticky top-0 z-50 bg-[#090519]">
        <div className="navbar text-[#ddd] py-7 lg:px-40">
            {/* Mobile version */}
            <div className="navbar flex justify-between relative">
                <div className="dropdown  text-[#ddd]">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-2xl z-50 bg-[#090519] rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl lg:absolute left-0"><img className="w-16" src={logo} alt="" /></Link>
            </div>

            {/* Desktop version */}
            <div className="navbar hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-sm">
                    {menuItem}
                    <div className='flex bg-[#1C193F] gap-5 ml-3 border border-[#454343]  p-3 rounded-lg'>
                        <Link to=''><img className="w-4" src={telegram} alt="" /></Link>
                        <Link to=''><img className="w-4" src={twitter} alt="" /></Link>
                        <Link to=''><img className="w-4" src={discord} alt="" /></Link>
                        <Link to=''><img className="w-4" src={youtube} alt="" /></Link>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navber;