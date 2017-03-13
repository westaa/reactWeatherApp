import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    //when a callback has reference to "this", you must bind callback to the correct scope
    //take the existing function. bind it to this, and replace the existing function with the bound function
    //fat arrow functions use lexical scope for this so they get the containing environment's scope naturally
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    // we need to go and fetch weather data
    this.setState({ term: ''});
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
