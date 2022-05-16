import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import * as BsIcons from 'react-icons/bs'
import { Link } from 'react-router-dom';
import tmLogo from '../images/tmLogo.png'
import vTruck from '../images/truck.png'

import './Menul.css';
import { IconContext } from 'react-icons';
import MySelect from './RouteOptions'



function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <>

      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar h-48 bg-black p-0 m-0 '>
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

                <div className='grid grid-cols-1 justify-items-center  m-0'>

                  <img
                    className='tmLogo w-14 pt-3 m-4'
                    alt='TurckMiles Logo'
                    src={tmLogo}
                  />


                  <label class="block">
                    <div className='flex bg-red-600 w-60 rounded-sm m-1 p-1'>
                      <input type="checkbox" class=" checked:bg-blue-500 w-10 h-5 " />
                      <span class="block text-sm font-sm text-white">Start at my GPS Location</span>
                    </div></label>
                  <div className='mx-8'>
                    <input className='searchBox p-1 m-2'

                      type="text"
                      placeholder="Search for Location"

                    />
                    <input
                      className='searchBox p-1 m-2'
                      type="text"
                      placeholder="Search for Location"

                    /></div>

                  <button className='bg-red-600 text-white mx-4 w-60 rounded-sm '>Run Trip</button>

                  <div><span class="block text-sm font-sm text-white">Trip Options</span></div>


                  <MySelect />


                  <div className='flex bg-red-600 w-60 rounded-sm m-1 p-1'>
                    <input type="checkbox" class=" checked:bg-blue-500 w-10 h-5 " />
                    <span class="block text-sm font-sm text-white w-40">Close Borders</span>
                  </div>


                  <div className='flex bg-red-600 rounded-sm w-60 m-1 p-1'>
                    <input type="checkbox" class=" checked:bg-blue-500 w-10 h-5 " />
                    <span class="block text-sm font-sm text-white ">Avoid Toll</span>
                  </div>

                  <img
                    className=' w-54 h-24 pt-3 m-2'
                    alt='TurckMiles Logo'
                    src={vTruck}
                  />

                </div></form>
            </div>
          </nav>
        </div>
      </IconContext.Provider>

    </>
  );
}

export default Navbar;