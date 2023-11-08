import React from 'react';
import frame from '../../assets/icon/Frame.svg'

const FoodSearch = () => {
    return (
        <div className='w-full hidden lg:flex bg-white m-2 p-5 rounded-2xl'>
            <div className='flex-row space-y-5'>
                <div className="btn-group rounded-2xl p-2 border-2 border-[#e65527] bg-opacity-10 ">
                    <button className="font-bold text-[#E55527] px-10 bg-[#e655271a]">Fruits</button>
                    <button className="btn px-10">Vegetables</button>
                </div>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search by Fruits Name" className="input input-bordered hidden sm:flex w-full" />
                        <button className=" ps-2 btn-square border-[#e655271a] bg-[#e655271a]">
                            <img src={frame} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FoodSearch;


{/* <div className='w-full hidden lg:flex bg-white m-2 p-5 rounded-2xl'>
            <div className='flex-row space-y-5'>
                <div className="btn-group rounded-2xl p-2 border-2 border-[#e65527] bg-opacity-10 ">
                    <button className="font-bold text-[#E55527] px-10 bg-[#e655271a]">Fruits</button>
                    <button className="btn px-10">Vegetables</button>
                </div>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search by Fruits Name" className="input input-bordered hidden sm:flex w-full" />
                        <button className=" ps-2 btn-square border-[#e655271a] bg-[#e655271a]">
                            <img src={frame} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div> */}