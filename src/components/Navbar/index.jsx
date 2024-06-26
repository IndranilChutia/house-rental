import React from 'react';
import logo from '@images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@components';

import { SignedOut, SignedIn, SignUpButton, SignInButton, UserButton } from "@clerk/clerk-react"

import RentDetails from 'pages/Client/RentDetails';
import { RiHomeHeartFill } from 'react-icons/ri';

const Navbar = () => {


    const routes = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Properties',
            path: '/properties'
        },
        {
            name: 'Wishlist',
            path: '/wishlist'
        },
        {
            name: 'Why Choose Us',
            path: '/about'
        },
    ]
    return (
        <div className='w-full my-2 h-10 flex justify-center'>
            <div className='container flex justify-between'>
                <div className='h-full flex items-center gap-16'>
                    <Link to={'/'} className='h-full'><img className='h-full' src={logo} alt="logo" /></Link>
                    <div className='flex gap-10'>
                        {routes.map((item) => {
                            return (
                                <NavLink to={item.path} key={item.name} className={({ isActive }) => isActive
                                    ? `text-slate-700 font-medium` : `text-gray-400 hover:text-slate-700 font-medium `}
                                >
                                    {item.name}
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <SignedOut>
                        <SignInButton>
                            <div className='font-medium text-gray-500 hover:text-slate-700 cursor-pointer'>Login</div>
                        </SignInButton>

                        <SignUpButton>
                            <Button onClick={() => { }} size='sm' >Register</Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>

                        <UserButton afterSignOutUrl='/'>
                            <UserButton.UserProfilePage
                                label='Rent Details'
                                labelIcon={<RiHomeHeartFill size={16} />}
                                url="rent-details"
                            >
                                <RentDetails />
                            </UserButton.UserProfilePage>
                        </UserButton>
                    </SignedIn>
                </div>
            </div>
        </div >
    );
};

export { Navbar };