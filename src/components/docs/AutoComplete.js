import React, { Component } from 'react';

class AutocompleteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      suggestions: [],
    };
  }

  fetchSuggestions = () => {
    const { inputValue } = this.state;
    const { apiKey } = this.props;

    fetch(
      `https://prime.promiles.com/WebAPI/api/ValidateLocation?locationText=${inputValue}&apikey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const suggestions = data.map(
          (item) => `${item.City}, ${item.State}, ${item.PostalCode}`
        );
        this.setState({ suggestions });
      })
      .catch((error) => {
        console.error('Error fetching suggestions:', error);
      });
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value }, () => {
      if (this.state.inputValue.length >= 3) {
        this.fetchSuggestions();
      }
    });
  };

  handleSelect = (suggestion) => {
    this.setState({ inputValue: suggestion });
  };

  render() {
    const { inputValue, suggestions } = this.state;

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
          placeholder={`Type at least 3 characters`}
        />
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => this.handleSelect(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    const apiKey = 'bU03MSs2UjZIS21HMG5QSlIxUTB4QT090';

    return (
      <div>
        <AutocompleteInput apiKey={apiKey} />
        <br />
        <AutocompleteInput apiKey={apiKey} />
      </div>
    );
  }
}

export default App;
