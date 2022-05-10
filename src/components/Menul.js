import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs'
import { Link } from 'react-router-dom';
import tmLogo from '../images/tmLogo.png'

import './Menul.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>

      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar h-48 bg-black  '>
          <div className='p-8'>
            <Link to='#' className='menu-bars '>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu navbar h-full'}>
            <div className='container'>
              <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>

              </ul>

              <form action="">

                <div className='grid grid-cols-1 justify-items-center'>

                  <img
                    className='tmLogo w-14 pt-3'
                    alt='TurckMiles Logo'
                    src={tmLogo}
                  />

                  <BsIcons.BsTruckFlatbed className='w-20 h-10 m-2' />
                  <label class="block">
                    <div className='flex bg-red-600 rounded-sm m-1 p-1'>
                    <input type="checkbox" class=" checked:bg-blue-500 w-10 h-5 mb-1" />
                  <span class="block text-sm font-sm text-white">Start at my GPS Location</span>
                    </div>
                    <input className='searchBox p-3 mb-3'

                      type="text"
                      placeholder="Search for Location"

                    />
                    <input
                      className='searchBox p-3'
                      type="text"
                      placeholder="Search for Location"

                    />
                  </label>
                    <button className='bg-red-600 text-white m-1 rounded-md px-5'>Run Trip</button>
                </div></form>
            </div>
          </nav>
        </div>
      </IconContext.Provider>

    </>
  );
}

export default Navbar;