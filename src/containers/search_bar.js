import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    //when a callback has reference to "this", you must bind callback to the correct scope
    //take the existing function. bind it to this, and replace the existing function with the bound function
    //fat arrow functions use lexical scope for this so they get the containing environment's scope naturally
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();

    // we need to go and fetch whether data
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="Get a five-day forecast in your favorite cities" className="form-control"
        value = {this.state.term}
        onChange = {this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
