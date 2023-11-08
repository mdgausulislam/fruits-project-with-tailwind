import React from 'react';
import home from '../../assets/icon/home-01.svg'
import dashboard from '../../assets/icon/dashboard-circle.svg'
import frame1 from '../../assets/icon/Frame1.svg'
import video from '../../assets/icon/video-replay.svg'
import more from '../../assets/icon/more-01.svg'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="w-[65px] text-white hidden sm:flex mt-20">
            <ul className="menu rounded-box space-y-9">
                <li>
                    <a className='border-2 rounded-md  bg-[#e655271a]'>
                        <img src={home} alt="" />
                    </a>
                </li>
                <li>
                    <Link to='/page' className='border-2 rounded-md'>
                        <img src={dashboard} alt="" />
                    </Link>
                </li>
                <li>
                    <a className='border-2 rounded-md'>
                        <img src={frame1} alt="" />
                    </a>
                </li>
                <li>
                    <a className='border-2 rounded-md'>
                        <img src={video} alt="" />
                    </a>
                </li>
                <li>
                    <a className='border-2 rounded-md'>
                        <img src={more} alt="" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;