import React from 'react';

const RightPart = () => {
    return (
        <div>
            <div className='w-full hidden lg:flex bg-white m-2 p-5 rounded-2xl'>
                <div className='flex-row space-y-5'>
                    <div className="navbar ">
                        <div className="flex-1">
                            <a className="btn btn-ghost normal-case text-xl">Settings</a>
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <details>
                                        <summary> </summary>
                                        <ul className="p-2 ">
                                            <li><a>Link 1</a></li>
                                            <li><a>Link 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <label className="label">
                        <span className="label-text">Pick the best fantasy franchise</span>
                    </label>
                    <input type="range" min={0} max="100" value="40" className="range range-error" />
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Pick the best fantasy franchise</span>
                        </label>
                        <select className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Remember me</span>
                            <input type="checkbox" className="toggle" checked />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightPart;