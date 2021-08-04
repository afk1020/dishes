import './App.css';
import React from 'react';
import Header from './Components/Header'
import DishForm from './Components/DishForm'
import DishContainer from './Components/DishContainer'


class App extends React.Component {
  state = {
    dishes:[],
  }

  //view all dishes
  componentDidMount(){
    fetch("http://localhost:3000/dishes")
    .then(res => res.json())
    .then(data => this.handleData(data))
  }

  handleData = (dish) =>{
    this.setState({
      dishes: dish
    })
  }

  // add a dish
  addDish = (newDish)=>{
    let postOption = {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify(newDish)
    }

    fetch("http://localhost:3000/dishes", postOption)
    .then(res => res.json())
    .then(this.setState({dishes: [...this.state.dishes, newDish]}))
  }

  deleteDish = (id) => {
    fetch("http://localhost:3000/dishes" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json',
        Accepts: 'application/json'
      },
    })

    .then(res => res.json)
    .then(deleteDish => this.setState({
      dishes: this.state.dishes.filter((dish)=> dish.id !==id)
    }))
  };
  
  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }
  render(){
  return (
      <>
        <Header />
        { this.state.display
          ?
          <DishForm addDish={this.addDish} />
          :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Dish </button>
        </div>
        <DishContainer dishData={this.state.dishes} delete={this.deleteDish} />
      </>
    );
  }
}
export default App;
