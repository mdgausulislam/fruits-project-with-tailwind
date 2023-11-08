import React from 'react';
import dashMenu from '../../assets/icon/menu-food-list.svg';
import downMenu from '../../assets/icon/fruits-down.svg'
import frame from '../../assets/icon/Frame.svg'
import fruits1 from '../../assets/foods/1.png'
import fruits2 from '../../assets/foods/2.png'
import fruits3 from '../../assets/foods/3.png'

const LeftPart = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col justify-between">
                {/* Page content here */}
                <div className='flex justify-between items-center lg:hidden'>
                    <div className='flex'>
                        <img src={dashMenu} alt="" />
                        <p className='ms-3'>Select Food Item</p>
                    </div>
                    <div>
                        <label htmlFor="my-drawer-2" className="btn drawer-button"><img src={downMenu} alt="" /></label>
                    </div>
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 lg:w-80 bg-base-100 rounded-2xl text-base-content">
                    {/* Sidebar content here */}

                    <div className='flex-row space-y-5'>
                        <div className="btn-group rounded-2xl p-2 border-2 border-[#e65527] bg-opacity-10 ">
                            <button className="font-bold text-[#E55527] px-10 bg-[#e655271a]">Fruits</button>
                            <button className="btn px-10">Vegetables</button>
                        </div>
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Search by Fruits Name" className="input input-bordered w-full" />
                                <button className=" ps-2 btn-square border-[#e655271a] bg-[#e655271a]">
                                    <img src={frame} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ul className="menu rounded-box space-y-6">
                            <h1 className='font-semibold text-lg'>Fruits List</h1>
                            <li>
                                <div className='flex border-2 border-[#E55527] p-4'>
                                    <img src={fruits1} alt="" />
                                    <div>
                                        <h1 className='font-semibold text lg'>Oranges</h1>
                                        <p>Vitamin C</p>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div className='flex p-4'>
                                    <img src={fruits2} alt="" />
                                    <div>
                                        <h1 className='font-semibold text lg'>Apples</h1>
                                        <p>Vitamin C</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex p-4'>
                                    <img src={fruits3} alt="" />
                                    <div>
                                        <h1 className='font-semibold text lg'>Avocado</h1>
                                        <p>Vitamin B6</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex p-4'>
                                    <img src={fruits3} alt="" />
                                    <div>
                                        <h1 className='font-semibold text lg'>Strawberries</h1>
                                        <p>Vitamin C</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex p-4'>
                                    <img src={fruits3} alt="" />
                                    <div>
                                        <h1 className='font-semibold text lg'>Mangoes</h1>
                                        <p>Vitamin A, C</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex p-4'>
                                    <img src={fruits3} alt="" />
                                    <div>
                                        <h1 className='font-semibold text lg'>Blueberries</h1>
                                        <p>Vitamin C, K</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex p-4'>
                                    <img src={fruits3} alt="" />
                                    <div>
                                        <h1 className='font-semibold text lg'>Grapes</h1>
                                        <p>Vitamin C, K</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex p-4'>
                                    <img src={fruits3} alt="" />
                                    <div>
                                        <h1 className='font-semibold text lg'>Pineapples</h1>
                                        <p>Vitamin C, K</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex p-4'>
                                    <img src={fruits3} alt="" />
                                    <div>
                                        <h1 className='font-semibold text lg'>Papayas</h1>
                                        <p>Vitamin C</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </ul>

            </div>
        </div>

    );
};

export default LeftPart;
