import React from 'react';
import error from '../assets/banner/image 1.png'

const NewPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='mt-20'>
                <img src={error} alt="" />
                <p className='text-center mt-4 text-2xl font-bold'>This page is empty</p>
            </div>
        </div>
    );
};

export default NewPage;