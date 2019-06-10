import React from 'react';
import '../App.css';



class SearchBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', output: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
        fetch('http://localhost:5001/'+this.state.value)
        .then(result=>result.json())
        .then(items=>console.log(items))
        event.preventDefault();
    }
  
    render() {
      return (
        
        <form onSubmit={this.handleSubmit}>
        <p>{this.state.value}</p>
          <label> 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default SearchBox