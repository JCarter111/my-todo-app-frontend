import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import AddItem from './components/AddItem';
import ListItem from './components/ListItems';
import NumberTasks from './components/NumberTasks';

// mimic database list
const todoListItems = [
  "Buy cough sweets",
  "Do the washing",
  "Online Shopping Order",
  "Buy Birthday present"
];

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav text="My To Do List" />
       <AddItem />
       <p>{todoListItems.length}</p>
       <NumberTasks text = {todoListItems.length}/>
       <h4>Here is a list of things I need to do</h4>
       <ul>
         {todoListItems.map(function(item){
            return <ListItem text ={item} />
        })}
       </ul>
       <ul>
         {<ListItem text= {todoListItems.length}/>
        }
       </ul>
      </div>
    );
  }
}

export default App;
