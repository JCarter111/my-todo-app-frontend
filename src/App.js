import React, { Component } from 'react';
import './App.css';
import ToDoListHeader from './components/ToDoListHeader';
import AddItem from './components/AddItem';
import NumberTasks from './components/NumberTasks';
import Footer from './components/Footer';
import TaskList from './components/TaskList';

//<TaskList todoListItems = { this.todoListItems }/>
// mimic database list within App to track
// status of the task list


class App extends Component {

  state = {
    todoListItems: [
    {todoItem: "Buy cough sweets", completed: false},
    {todoItem: "Do the washing",completed: false},
    {todoItem: "Online Shopping Order", completed: false},
    {todoItem: "Buy Birthday present", completed: false},
  ],
  }

  // add new task 
  addTask = (newTask) => {
    // add the new task (which will be a string) to the task list
    // Make a fresh copy of the tasks array with slice
    const newTasks = this.state.todoListItems.slice();
    const todoListObject = {todoItem: newTask, completed: false};
    newTasks.push(todoListObject);

    // Always use setState to update any part of the state which needs to change
    this.setState({
      todoListItems: newTasks
    });
    alert(this.state.todoListItems.length);
  }

  // delete task
  deleteTask = (taskToDeleteObject) => {
    // delete an existing task from the task list

    // Make a fresh copy of the tasks array with slice
    const todoListCopy = this.state.todoListItems.slice();
    const deleteObject = taskToDeleteObject;

    //filter the array copy to remove the existingTask 
    const newTaskList = todoListCopy.filter(function (object){
      // return all values except the task to be deleted
      return (object !== deleteObject);
    });
  
    // Always use setState to update any part of the state which needs to change
    this.setState({
      todoListItems: newTaskList
    });
  }
  // mark task completed
  completedTask = (taskCompletedObject) => {
    // delete an existing task from the task list

    // Make a fresh copy of the tasks array with slice
    const todoListCompleted = this.state.todoListItems.slice();
    const completeTaskObject = taskCompletedObject;

    //change code here to update completed tasks
    const newTaskList = todoListCompleted.map(function (object){
      // return all values without modification
      // except update the selected object to completed
      if (object !== completeTaskObject) {
          return object
      } else {
        return {todoItem: object.todoItem,completed:true }
      }
    });
    // Always use setState to update any part of the state which needs to change
    this.setState({
      todoListItems: newTaskList
    });
  }

  
  render() {
    return (
      <div className="App"> 
       <ToDoListHeader text ="My To Do List"/>
       <AddItem addTask={this.addTask}/>
       <NumberTasks countTasks = 
        {this.state.todoListItems.length}/>
       <TaskList listfromParent = 
        {this.state.todoListItems }
        deleteTask={this.deleteTask}
        completeTask = {this.completedTask}/>
       <Footer />
      </div>
     
    );
  }
}

export default App;
