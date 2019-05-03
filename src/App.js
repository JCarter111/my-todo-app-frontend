import React from 'react';
import './App.css';
import ToDoListHeader from './components/ToDoListHeader';
import AddItem from './components/AddItem';
import NumberTasks from './components/NumberTasks';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import uuid from "uuid/v4";

//<TaskList todoListItems = { this.todoListItems }/>
// mimic database list within App to track
// status of the task list


class App extends React.Component {

  state = {
    todoListItems: [
    {todoItem: "Buy cough sweets", completed: false, id:uuid()},
    {todoItem: "Do the washing",completed: false, id:uuid()},
    {todoItem: "Online Shopping Order", completed: true, id:uuid()},
    {todoItem: "Buy Birthday present", completed: false, id:uuid()},
  ],
  }
  
  // add new task 
  addTask = (newTask) => {
    // add the new task (which will be a string) to the task list
    // Make a fresh copy of the tasks array with slice
    const newTasks = this.state.todoListItems.slice();
    const todoListObject = {todoItem: newTask, completed: false, id:uuid()};
    newTasks.push(todoListObject);

    // Always use setState to update any part of the state which needs to change
    this.setState({
      todoListItems: newTasks
    });
    console.log(this.state.todoListItems);
  }

  // delete task
  deleteTask = (idTaskToDelete) => {
    // delete an existing task from the task list

    // Note: Do not need a fresh copy of the todoListItems array
    // here because filter makes its own copy of the array
    
    //filter the array copy to remove the existingTask 
    const newTaskList = this.state.todoListItems.filter((taskObject) => {
      // return all values except the task to be deleted
      // use the unique id of the task to locate the task in 
      // the array of objects
      return (taskObject.id !== idTaskToDelete);
    });
  
    // Always use setState to update any part of the state which needs to change
    this.setState({
      todoListItems: newTaskList
    });
  }
  // mark task completed
  completedTask = (idCompletedObject) => {
    // delete an existing task from the task list

    // Note: do not need a copy of the array because
    // map makes its own copy

    //change code here to update completed tasks
    const newTaskList = this.state.todoListItems.map((taskObject) => {
      // return all values without modification
      // except update the selected object to completed
      // use unique id of the task object to locate the object
      // in the array of tasks
      if (taskObject.id !== idCompletedObject) {
          return taskObject
      } else {
        return {todoItem: taskObject.todoItem,completed:true, id: taskObject.id }
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
        completedTask = {this.completedTask}/>
       <Footer />
      </div>
     
    );
  }
}

export default App;
