import React from 'react';
import logo from '../../assets/logo/logo.svg';
import searchIcon from '../../assets/icon/Frame.svg';
import sun from '../../assets/icon/sun-01.svg';
import nintendo from '../../assets/icon/nintendo-switch.svg';
import menubar from '../../assets/icon/menu-01.svg';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></a>
            </div>
            <div className="navbar-center sm:flex hidden">
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search Best Food" className="input input-bordered" />
                        <button className=" ps-2 btn-square border-[#e655271a] bg-[#e655271a]">
                            <img src={searchIcon} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="navbar-end space-x-6">
                <a className="border-2 rounded-md border-[#e655271a] lg:hidden bg-[#e655271a] p-[6px]"><img src={searchIcon} alt="" /></a>
                <a className="border-2 rounded-md border-[#e655271a] hidden lg:flex bg-[#e655271a] p-[6px] "><img src={sun} alt="" /></a>
                <a className="border-2 rounded-md border-[#e655271a] hidden lg:flex bg-[#e655271a] p-[5px] "><img src={nintendo} alt="" /></a>
                <a className="border-2 rounded-md  bg-[#1010001a] p-[6px] "><img src={menubar} alt="" /></a>
            </div>
        </div>
    );
};

export default NavBar;