import React from 'react';
import facebook from '../../assets/social/facebook.png';
import linkedin from '../../assets/social/linkedin.png';
import twitter from '../../assets/social/twitter.png';
import link from '../../assets/social/link.png';

const SocialMedia = () => {
    return (
        <div className='flex space-x-6 lg:hidden mt-6'>
             <img src={facebook} alt="" />
             <img src={linkedin} alt="" />
             <img src={twitter} alt="" />
             <img src={link} alt="" />
        </div>
    );
};

export default SocialMedia;