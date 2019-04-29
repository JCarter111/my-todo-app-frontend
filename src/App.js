import React from 'react';
import './App.css';
import ToDoListHeader from './components/ToDoListHeader';
import AddItem from './components/AddItem';
import NumberTasks from './components/NumberTasks';
import Footer from './components/Footer';
import TaskList from './components/TaskList';

//<TaskList todoListItems = { this.todoListItems }/>
// mimic database list within App to track
// status of the task list


class App extends React.Component {

  state = {
    todoListItems: [
    {todoItem: "Buy cough sweets", completed: false},
    {todoItem: "Do the washing",completed: false},
    {todoItem: "Online Shopping Order", completed: true},
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
  }

  // delete task
  deleteTask = (taskToDeleteObject) => {
    // delete an existing task from the task list

    // Make a fresh copy of the tasks array with slice
    const todoListCopy = this.state.todoListItems.slice();
    const deleteObject = taskToDeleteObject;

    //filter the array copy to remove the existingTask 
    const newTaskList = todoListCopy.filter((taskObject) => {
      // return all values except the task to be deleted
      return (taskObject !== deleteObject);
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
    const newTaskList = todoListCompleted.map((taskObject) => {
      // return all values without modification
      // except update the selected object to completed
      if (taskObject !== completeTaskObject) {
          return taskObject
      } else {
        return {todoItem: taskObject.todoItem,completed:true }
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
