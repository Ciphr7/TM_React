import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import tmLogo from '../images/tmLogo.png'
// import * as BsIcons from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Menul.css';
import { IconContext } from 'react-icons';
import LocationLookup from './LocationLookup';


function Navbar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  // State variables to manage checkbox and input values

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
                    <LocationLookup />

                </div></form>
            </div>
          </nav>
        </div>
      </IconContext.Provider>

    </>
  );
}


export default Navbar;