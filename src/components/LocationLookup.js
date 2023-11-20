import React, { Component } from 'react';
import MySelect from './RouteOptions'

import vTruck from '../images/truck.png'
class LocationLookup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      locationValue: null,
    };
  }

  // Function to get the user's current location
  getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Extract latitude and longitude from the position object
          const { latitude, longitude } = position.coords;
          this.setState({
            locationValue: `${latitude}:${longitude}`,
          });
        },
        (error) => {
          console.error('Error getting geolocation:', error);
          this.setState({ locationValue: null });
        }
      );
    } else {
      console.error('Geolocation is not supported in this browser.');
      this.setState({ locationValue: null });
    }
  };

  // Function to handle checkbox change
  handleCheckboxChange = () => {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });

    // Set the input value based on the checkbox state
    if (isChecked) {
      this.setState({ locationValue: null });
    } else {
      this.getGeolocation();
    }
  };

  // Function to handle input value change
  handleInputChange = (event) => {
    this.setState({ locationValue: event.target.value });
  };

  render() {
    const { isChecked, locationValue } = this.state;

    return (
      <>
        <label className="block">
        <div className='flex bg-red-600 w-60 rounded-sm m-1 p-1'>
         
          <input
          className=" checked:bg-blue-500 w-10 h-5 "
            type="checkbox"
            checked={isChecked}
            onChange={this.handleCheckboxChange}
          />
          <span className="block text-sm font-sm text-white">Start at my GPS Location</span>
        </div></label>

        <br />

        <label>
          <input className='searchBox p-1 m-2'
            type="text"
            value={locationValue === null ? '' : locationValue}
            onChange={this.handleInputChange}
            placeholder="Search for Location"
          />
          </label>
        <input
          className='searchBox p-1 m-2'
          type="text"
          onChange={this.handleInputChange}
          placeholder="Search for Location"

        />
        <button className='bg-red-600 text-white mx-4 w-60 rounded-sm '>Run Trip</button>
        <div><span className="block text-sm font-sm text-white">Trip Options</span></div> 

        <MySelect />


<div className='flex bg-red-600 w-60 rounded-sm m-1 p-1'>
  <input type="checkbox" className=" checked:bg-blue-500 w-10 h-5 " />
  <span className="block text-sm font-sm text-white w-40">Close Borders</span>
</div>


<div className='flex bg-red-600 rounded-sm w-60 m-1 p-1'>
  <input type="checkbox" className=" checked:bg-blue-500 w-10 h-5 " />
  <span className="block text-sm font-sm text-white ">Avoid Toll</span>
</div>

<img
  className=' w-54 h-24 pt-3 m-2'
  alt='TurckMiles Logo'
  src={vTruck}
/>
      </>
    );
  }
}

export default LocationLookup
