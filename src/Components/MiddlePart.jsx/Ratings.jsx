import React from 'react';

const Ratings = () => {
    return (
        <div className='lg:hidden mt-10'>
            <h1 className='font-bold text-2xl'>Was the helpful</h1>
            <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
        </div>
    );
};

export default Ratings;