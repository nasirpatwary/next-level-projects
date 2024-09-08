"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const layout = ({ children }) => {
    const pathName = usePathname()
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Posts",
            path: "/posts"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },
        {
            title: "Products",
            path: "/dashboard/products"
        },
    ]
    return (
        <div>
            <nav className='bg-sky-400 py-2 flex gap-10 text-gray-600'>
                {
                    links.map((link) => <Link className={`${pathName === link.path && 'text-orange-500 underline underline-offset-8'}`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </nav>
            {children}
            <footer className='bg-black text-white'>Dashboar Footer Section</footer>
        </div>
    );
};

export default layout;