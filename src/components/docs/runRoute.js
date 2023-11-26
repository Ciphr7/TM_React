import React, { Component } from 'react';
import MySelect from './RouteOptions';
import vTruck from '../images/truck.png';

class LocationLookup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      locationValue: null,
      input1Value: '',
      input2Value: '', // New state for the second input
      suggestions1: [],
      suggestions2: [], // New state for the second set of suggestions
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

  fetchSuggestions = (inputValue, inputField) => {
    fetch(
      `https://prime.promiles.com/WebAPI/api/ValidateLocation?locationText=${inputValue}&apikey=${'bU03MSs2UjZIS21HMG5QSlIxUTB4QT090'}`
    )
      .then((response) => response.json())
      .then((data) => {
        const suggestions = data.map(
          (item) => `${item.City}, ${item.State}, ${item.PostalCode}`
        );
        this.setState({ [inputField]: suggestions });
      })
      .catch((error) => {
        console.error('Error fetching suggestions:', error);
      });
  };

  handleInputChange = (e, inputField) => {
    const inputValue = e.target.value;

    this.setState({ [inputField]: inputValue }, () => {
      if (inputValue.length >= 3) {
        this.fetchSuggestions(inputValue, `suggestions${inputField}`);
      }
    });
  };

  handleSelect = (selectedValue, inputField) => {
    this.setState({ [inputField]: selectedValue, [inputField.replace('suggestions', '')]: [] });
  };

  handleCheckboxChange = () => {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });

    if (isChecked) {
      this.setState({ locationValue: null });
    } else {
      this.getGeolocation();
    }
  };

  render() {
    const { isChecked, locationValue, input1Value, input2Value, suggestions1, suggestions2 } = this.state;

    return (
      <>
        <label className="block">
          <div className='flex bg-red-600 w-60 rounded-sm m-1 p-1'>
            <input
              className="checked:bg-blue-500 w-10 h-5"
              type="checkbox"
              checked={isChecked}
              onChange={this.handleCheckboxChange}
            />
            <span className="block text-sm font-sm text-white">Start at my GPS Location</span>
          </div>
        </label>

        <br />

        <label>
          <input
            className='searchBox p-1 m-2'
            type="text"
            value={locationValue === null ? '' : locationValue}
            onChange={(e) => this.handleInputChange(e, 'input1Value')}
            placeholder="Search for Location"
          />
        </label>

        <ul className="text-3 text-white p-2 text-center font-bold bg-red-600">
          {suggestions1.map((suggestion, index) => (
            <li key={index} onClick={() => this.handleSelect(suggestion, 'suggestions1')}>
              {suggestion}
            </li>
          ))}
        </ul>

        <label>
          <input
            className='searchBox p-1 m-2'
            type="text"
            value={input2Value}
            onChange={(e) => this.handleInputChange(e, 'input2Value')}
            placeholder="Second Input"
          />
        </label>

        <ul className="text-3 text-white p-2 text-center font-bold bg-red-600">
          {suggestions2.map((suggestion, index) => (
            <li key={index} onClick={() => this.handleSelect(suggestion, 'suggestions2')}>
              {suggestion}
            </li>
          ))}
        </ul>

        <MySelect />

        <div className='flex bg-red-600 w-60 rounded-sm m-1 p-1'>
          <input type="checkbox" className="checked:bg-blue-500 w-10 h-5" />
          <span className="block text-sm font-sm text-white w-40">Close Borders</span>
        </div>

        <div className='flex bg-red-600 rounded-sm w-60 m-1 p-1'>
          <input type="checkbox" className="checked:bg-blue-500 w-10 h-5" />
          <span className="block text-sm font-sm text-white">Avoid Toll</span>
        </div>

        <img
          className='w-54 h-24 pt-3 m-2'
          alt='TruckMiles Logo'
          src={vTruck}
        />
      </>
    );
  }
}

export default LocationLookup;
