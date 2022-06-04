import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

// import * as BsIcons from 'react-icons/bs'
import { Link } from 'react-router-dom';
import tmLogo from '../images/tmLogo.png'
import vTruck from '../images/truck.png'

import './Menul.css';
import { IconContext } from 'react-icons';
import MySelect from './RouteOptions'



function Navbar() {

  const [checked, setChecked] = useState(false); 
  const [sidebar, setSidebar] = useState(false);
const loc1 =""
  const showSidebar = () => setSidebar(!sidebar);
  const handleChange = () => {
    setChecked(!checked);
    console.log('The checkbox was toggled');
    setOriginToCurrentLocation()
  };
  function componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const loc1 = (lat + ':' + lng);
    });
  }
  function setOriginToCurrentLocation() {
    componentDidMount()
    const b = this.checkbox === checked;
    var self = this;
    if (!b) {
      this.input1 = "";
    } else if (navigator.geolocation) {
      var options = {
        maximumAge: 0,
        timeout: 30000,
        enableHighAccuracy: true,
      };
      navigator.geolocation.getCurrentPosition(success, error, [options]);
    } else {
      alert("User did not allow access to GPS location");
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    function success(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      self.input1 = lat + ":" + lon;
    }
    /* When document is loaded fully...
     ****************************************/
  }

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
                      <input type="checkbox" onChange={handleChange} class=" checked:bg-blue-500 w-10 h-5 " 
                       checked={checked} value={checked}/>
                      <span class="block text-sm font-sm text-white">Start at my GPS Location</span>
                    </div></label>
                  <div className='mx-8'>

                    <input className='searchBox p-1 m-2'

                      type="text"
                      placeholder="Search for Location"
                      name = "loc1"
                      value={loc1}
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