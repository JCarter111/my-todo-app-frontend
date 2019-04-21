import React, { Component } from 'react';
import './App.css';
import ToDoListHeader from './components/ToDoListHeader';
import AddItem from './components/AddItem';
import NumberTasks from './components/NumberTasks';
import Footer from './components/Footer';
import TaskList from './components/TaskList';

//<TaskList todoListItems = { this.todoListItems }/>
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
       <ToDoListHeader text ="My To Do List"/>
       <AddItem />
       <NumberTasks text = {todoListItems.length}/>
       <TaskList listfromParent = { todoListItems }/>
       <Footer />
      </div>
     
    );
  }
}

export default App;
