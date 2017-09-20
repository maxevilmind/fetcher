import React, { Component } from 'react';
import './App.css';
import { getEmail } from './utils/google-scraping'
import { fetchGoogle } from './utils/google'
import PropTypes from 'prop-types';
import $ from 'jquery';
import Immutable from 'immutable'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', list: Immutable.List([])};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetchGoogle(this.state.name).then((data) => {
      this.linkArray = data.map((item) =>
        <li>{item[0]}</li>
      );
      this.setState({list: data});
    });
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <input id="fetch-text" type="text" name="fname" value={this.state.name} onChange={this.handleChange}></input>
        <button id="fetch-button" onClick={this.handleClick}>Fetch</button>
        <ul>{this.linkArray}</ul>
      </div>
    );
  }
}

export default App;
