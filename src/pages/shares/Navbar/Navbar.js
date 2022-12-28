import React, { useContext } from 'react';
import { FaBeer, FaBell, FaHome, FaInbox, FaNeos, FaPhotoVideo } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider/Authprovider';
const Navbar = () => {
    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)

    const handlelogout = () => {
        logout()
            .then(() => {
                navigate('/auth/login')
            })
            .catch(err => {
                console.log(err)

            })
    }

    const menuitems = <>
        <li>
            <a className="justify-between">
                About
                <span className="badge">user</span>
            </a>
        </li>
        <li><a>Settings</a></li>
        {
            user?.email ?
                <li><button onClick={handlelogout}>logout</button></li>
                :
                <li><Link to='/auth/login'>Login</Link></li>
        }
    </>
    return (
        <div>
            <div className="navbar bg-gray-600">

                <div className="flex-1 navbar-start">
                    <Link to='/' className="text-white normal-case text-2xl"><span className='text-lime-400 font-extrabold text-4xl'>N</span>oteBook</Link>
                </div>

                <div className='navbar-center grid grid-flow-col gap-4 lg:gap-6 px-3 py-1 rounded-lg'>
                    <Link to='/' className=' rounded-full hover:bg-gray-500 p-1'><FaHome title='home' className='text-white lg:text-3xl'></FaHome></Link>
                    <Link to='/inbox' className=' rounded-full hover:bg-gray-500 p-1'>
                        <FaInbox title='inbox' className='text-white lg:text-3xl'></FaInbox></Link>
                    <Link to='/notifications' className=' rounded-full hover:bg-gray-500 p-1'>
                        <FaBell title='notification' className='text-white lg:text-3xl'></FaBell></Link>

                    <Link to='/media' className=' rounded-full hover:bg-gray-500 p-1'>
                        <FaPhotoVideo title='media' className='text-white lg:text-3xl'></FaPhotoVideo></Link>

                </div>

                <div className="flex-none navbar-end">
                    {/* <div className=' flex'>
                        <FaHome className='ml-1 w-12'></FaHome>
                        <FaInbox></FaInbox>
                        <FaBell></FaBell>
                    </div> */}


                    {/* <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img title='Account' src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">



                            {menuitems}




                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;