import React from 'react';
import orange from '../../assets/banner/1.png'

const FruitsDetails = () => {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row-reverse bg-base-100 p-8">
                <img className='w-full md:w-1/2 lg:w-1/2 lg:ms-4' src={orange} alt="Album" />
                <div>
                    <h2 className="text-2xl font-bold">Health benefits of an avocado</h2>
                    <h4 className='font-bold'>Supports eye health:</h4>
                    <p>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                    <h4 className='font-bold'>Supports eye health:</h4>
                    <p>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                </div>
            </div>
            <h4 className='font-bold'>Supports eye health:</h4>
            <p>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy</p>


            <div className="flex flex-col-reverse md:flex-row-reverse bg-base-100 p-8">
                <div className='lg:ms-4'>
                    <h2 className="text-2xl font-bold">Health benefits of an avocado</h2>
                    <h4 className='font-bold'>Supports eye health:</h4>
                    <p>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                    <h4 className='font-bold'>Supports eye health:</h4>
                    <p>Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                </div>
                <img className='w-full md:w-1/2 lg:w-1/2' src={orange} alt="Album" />
            </div>
            <div className='lg:hidden'>
                <h1 className='font-bold text-2xl'>Was the helpful</h1>
                <div className="rating mt-3">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
        </div>
    );
};

export default FruitsDetails;