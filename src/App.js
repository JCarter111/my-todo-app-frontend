import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import ToDoListHeader from './components/ToDoListHeader';
import AddItem from './components/AddItem';
import ListItem from './components/ListItems';
import NumberTasks from './components/NumberTasks';
import Footer from './components/Footer'


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
      <ToDoListHeader />  
       <Nav text="My To Do List" />
       <AddItem />
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
       <Footer />
      </div>
     
    );
  }
}

export default App;
