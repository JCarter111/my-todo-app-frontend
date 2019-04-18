import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import AddItem from './components/AddItem';
import ListItem from './components/ListItems';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav text="Welcome to my App" />
       <Nav text="Contact Page"/>
       <Nav text="About Us"/>
       <AddItem />
       <h4>Here is a list of things I need to do</h4>
       <ul>
         <ListItem text = "Buy cough sweets" />
         <ListItem text = "Do the washing" />
         <ListItem text = "Buy an Easter egg" />
         <ListItem text = "Post Birthday card" />
       </ul>
      </div>
    );
  }
}

export default App;
