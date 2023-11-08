import React from 'react';
import textSquare from '../../assets/icon/text-square.svg'
import dropdown from '../../assets/icon/dropdown.svg'


const RightPart = () => {
    return (
        <div className='w-full bg-base-100 space-y-6 p-4 rounded-2xl hidden lg:flex flex-col'>
            <div className='space-y-4 p-3 border-2 rounded-lg '>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img src={textSquare} alt="" />
                    <p>Settings</p>
                </div>
                <div>
                    <img src={dropdown} alt="" />
                </div>
            </div>

            <div>
                <div className='flex justify-between'>
                    <h1>Paragraph</h1>
                    <div>
                        <h2>19</h2>
                    </div>
                </div>
                <input type="range" min={0} max="100" value="40" className="range-error w-full" />
            </div>


            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-bold">Choose Vitamin Type</span>
                </label>
                <select className="select select-bordered">
                    <option disabled selected>All Vitamin</option>
                    <option>Star Wars</option>
                </select>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Turn Off Subtitle</span>
                    <input type="checkbox" className="toggle" />
                </label>
            </div>
            </div>
        </div>


    );
};

export default RightPart;