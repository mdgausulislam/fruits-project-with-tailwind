import React from 'react';
import orange from '../../assets/banner/1.png'
import Ratings from './Ratings';
import SocialMedia from './SocialMedia';


const FruitsDetails = () => {
    return (
        <div>
            <div className='bg-base-100 py-8 px-3 rounded-2xl'>
                <div className="flex flex-col-reverse md:flex-row-reverse">
                    <img className='w-full md:w-1/2 lg:w-1/2 lg:ms-4 md:ms-4 mt-7' src={orange} alt="Album" />
                    <div>
                        <h2 className="text-2xl font-bold">Health benefits of an avocado</h2>
                        <h4 className='font-bold'>Supports eye health:</h4>
                        <p className='text-justify text-xs'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                        <h4 className='font-bold'>Supports eye health:</h4>
                        <p className='text-justify text-xs'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                    </div>
                </div>

                <h4 className='font-bold mt-5'>Supports eye health:</h4>
                <p className='text-justify text-xs'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration..</p>

                <div className="mt-4 flex flex-col-reverse md:flex-row-reverse bg-base-100">
                    <div className='lg:ms-4 md:ms-4'>
                        <h4 className='font-bold'>Supports eye health:</h4>
                        <p className='text-justify text-xs'>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy </p>
                    </div>
                    <img className='sm:w-full flex md:w-1/2 lg:w-1/2 mb-4 mt-4' src={orange} alt="Album" />
                </div>
                <Ratings></Ratings>
                <SocialMedia></SocialMedia>
            </div>
        </div>
    );
};

export default FruitsDetails;