import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AutocompleteInput = ({ id, apiKey }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://prime.promiles.com/WebAPI/api/ValidateLocation?locationText=${inputValue}&apikey=${apiKey}`
        );
        const data = response.data;

        setSuggestions(
          data.map((item) => `${item.City}, ${item.State}, ${item.PostalCode}`)
        );
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, e.g., show an error message to the user
      }
    };

    if (inputValue.length >= 3) {
      fetchData();
    } else {
      setSuggestions([]);
    }
  }, [inputValue, apiKey]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelect = (selectedValue) => {
    setInputValue(selectedValue);
  };

  return (
    <div>
      <input
        type="text"
        id={id}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={`Type at least 3 characters for ${id}`}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSelect(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const apiKey = 'bU03MSs2UjZIS21HMG5QSlIxUTB4QT090';

  return (
    <div>
      <AutocompleteInput id="origin" apiKey={apiKey} />
      <br />
      <AutocompleteInput id="stop1" apiKey={apiKey} />
    </div>
  );
};
export default AutocompleteInput;
