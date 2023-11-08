import React from 'react';
import home from '../../assets/icon/home-01.svg'
import dashboard from '../../assets/icon/dashboard-circle.svg'
import frame1 from '../../assets/icon/Frame1.svg'
import video from '../../assets/icon/video-replay.svg'
import more from '../../assets/icon/more-01.svg'

const Footer = () => {
    return (
        <div className='text-center'>
            <div className='flex items-center justify-center mx-5 space-x-12 lg:hidden mt-6 mb-3' >
                <img src={home} alt="" />
                <img src={dashboard} alt="" />
                <img src={frame1} alt="" />
                <img src={video} alt="" />
                <img src={more} alt="" />
            </div>
        </div>
    );
};

export default Footer;