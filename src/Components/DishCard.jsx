import React, { Component } from 'react';

class DishCard extends Component {


  render() {
    return (
      <div className="card" id={this.props.dish.id}>
        <h2>{this.props.dish.name}</h2>
        <button className="del-btn" onClick={() =>this.props.delete(this.props.dish.id)}>Delete Dish</button>
      </div>
    );
  }

}

export default DishCard;
