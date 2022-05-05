import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
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
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

          </ul>
          <div className='logoCont'>

            <img
              className='tmLogo'
              alt='TurckMiles Logo'
              src={tmLogo}
            />
            <GiIcons.GiTruck className='menu-bars' />
            <input

              type="text"
              placeholder="Search for Location"

            />
            <input

              type="text"
              placeholder="Search for Location"

            />
          </div>
        </nav>
      </IconContext.Provider>

    </>
  );
}

export default Navbar;