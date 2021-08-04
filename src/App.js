import './App.css';
import React from 'react';
import Header from './Components/Header'
import DishForm from './Components/DishForm'
import DishContainer from './Components/DishContainer'


const localdb = "http://localhost:3000/dishes"

class App extends React.Component {
  state = {
    dishes:[],
  }

  //view all dishes
  componentDidMount(){
    fetch(localdb)
    .then(res => res.json())
    .then(data => console.log(data))
    
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

    fetch(localdb, postOption)
    .then(res => res.json())
    .then(this.setState({dishes: [...this.state.dishes, newDish]}))
  }

  deleteDish = (id) => {
    fetch(localdb + id, {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
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
          <button onClick={this.handleClick}> Dish Form </button>
        </div>
        <DishContainer dishData={this.state.dishes} delete={this.deleteDish} />
      </>
    );
  }
}
export default App;
