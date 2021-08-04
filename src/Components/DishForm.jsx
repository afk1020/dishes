import React, { Component } from 'react';

class DishForm extends Component {
  state = {
      name: "",
    };
  
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.addDish(this.state)
    
    
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="add-dish-form">
          <h3>Add a dish!</h3>
          <input onChange={this.handleName} type="text" name="name" placeholder="Enter a dish name..." className="input-text" value={this.state.name} />
          <br />
          <input type="submit" name="submit" value="Add a New Dish" className="submit" />
        </form>
      </div>
    );
  }

}

export default DishForm;