import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to Ahnaf Alve's World</h1>
      <h2>React core-concepts</h2>

          <Counter></Counter>

          <Users></Users>

          <Product name = 'X-box' price='$200'></Product>
          <Product name = 'PS6' price='$500'></Product>
  
        <Person name='Alve' job='programmer'></Person>
        <Person  name='Ahanf Alve' job='software engineer'></Person>
      </header>
    </div>
  );
}


// product components. similar in look and different in data

function Product(props) {
  const ProductStyle={
    border:'5px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightsalmon',
    height:'200px',
    width:'200px',
    float:'left',
    margin: '10px'
  }
    return (
      <div style={ProductStyle}>
        <h2>Name: {props.name} </h2>
        <h3>Price: {props.price}</h3>
        <button>Buy Now</button>
      </div>
    )
}

// Dynamic Names and css styles

function Person(props){
  const styles={
    color:'blue',
    border:'10px solid gray',
    margin: '15px',
    padding:'25px',
    backgroundColor:'cyan'
  }
  return(
    <div style={styles}>
     <h1> Name : {props.name} </h1>
     <h2>profession : {props.job}</h2>
     <h5></h5>
  </div>
  ) 
  
}


// changing useState

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

// users Data load from server(API)

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
     {
       <ul>
         {
           users.map(user => <li>{user.name}</li>)
         }
       </ul>
     }
    </div>
  )
}

export default App;
