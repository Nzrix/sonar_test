import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nicepic from '@/image/Nicepic.jpg'

const Navbar2 = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-red-500">
                    
                    <div className="flex-1">
                        <Link href="/" className="btn btn-ghost text-xl text-white ">
                            Music
                        </Link>
                        
                    </div>

                    <div className='flex-none gap-2'>
                        <div className="flex-none hidden">
                            <input
                                type="text"
                                placeholder="Search"
                                className="input input-bordered w-24 md:w-[270px]"
                            />
                        </div>
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <Image alt="Profile" src={Nicepic} />
                                </div>
                            </div>
                            <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        <Link href="/Profile" className='hover:text-black'>Profile</Link>
                                    </a>
                                </li>
                                <li>
                                    <a className='hover:text-black'>Settings</a>
                                </li>
                                <li>
                                    <a className='hover:text-black'>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar2