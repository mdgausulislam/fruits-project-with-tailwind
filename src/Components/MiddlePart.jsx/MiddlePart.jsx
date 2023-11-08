import React from 'react';
// import apple from '../../assets/banner/2.png'
import facebook from '../../assets/social/facebook.png';
import linkedin from '../../assets/social/linkedin.png';
import twitter from '../../assets/social/twitter.png';
import link from '../../assets/social/link.png';
import FruitsDetails from './FruitsDetails';

const MiddlePart = () => {
    return (
        <div className='flex bg-base-100'>
            <div className='flex flex-col-reverse md:flex-row-reverse mt-36'>
                <div className="w-16 text-white lg:menu-horizontal">
                    <ul className="menu rounded-box space-y-6">
                        <li>
                            <a className='border-2 rounded-s  bg-[#e655271a]'>
                                <img className='w-16' src={facebook} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className='border-2 rounded-md'>
                                <img src={linkedin} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className='border-2 rounded-md'>
                                <img src={twitter} alt="" />
                            </a>
                        </li>
                        <li>
                            <a className='border-2 rounded-md'>
                                <img src={link} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <FruitsDetails></FruitsDetails>
        </div>

    );
};

export default MiddlePart;



