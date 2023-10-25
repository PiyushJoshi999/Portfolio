import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',

        },
        {
            id: 2,
            link: 'about',

        },
        {
            id: 3,
            link: 'projects',

        },
        {
            id: 4,
            link: 'experience',

        },
        {
            id: 5,
            link: 'contact',

        },
    ]

  return (
    <div className='flex justify-between items-center w-full px-4 h-20 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-1'>Piyush</h1>
        </div>
        <ul className='hidden md:flex'>
            {links.map((link) => (
            <li key={link.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
                <Link to={link.link} smooth duration={500}>{link.link}</Link>
            </li>
            ))}
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
        </div>
        {nav && (
            <ul className='flex flex-col justify-center item-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-gray-500'>
            {links.map((link) => (
            <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    <Link onClick={() => setNav(!nav)} to={link.link} smooth duration={500}>{link.link}</Link>
            </li>
            ))}
        </ul>
        )}
    </div>

  )
}

export default NavBar