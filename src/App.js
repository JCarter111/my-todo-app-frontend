import React from 'react';
import './App.css';
import ToDoListHeader from './components/ToDoListHeader';
import AddItem from './components/AddItem';
import NumberTasks from './components/NumberTasks';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import uuid from "uuid/v4";
import moment from "moment";
import axios from "axios";


// mimic database list within App to track
// status of the task list


class App extends React.Component {

  state = {
    todoListItems: [
    
  ],
  }
  
  componentWillMount() {
  axios.get('https://2xo2bg7ux6.execute-api.eu-west-2.amazonaws.com/dev/tasks')
  .then(response => {
    console.log(response.data.tasks);
    this.setState({todoListItems: response.data.tasks});
  })
  .catch(error => {
    console.log(error);
  });
   
  }

  // add new task 
  addTask = (newTask, dueDate, taskPriority) => {
    // add the new task (which will be a string) to the task list
    // Make a fresh copy of the tasks array with slice
    const newTasks = this.state.todoListItems.slice();
    // original todoListObject with unique id assigned in the code
    //const todoListObject = {description: newTask, dueDate: moment(dueDate,"YYYY-MM-DD"), 
    //  completed: false, priority: taskPriority, taskId:uuid()};
    // new task object Note: unique ID now assigned when the data is inserted into the 
    // database, need userId to be 1 or 2
    //fails here object not defined
    const todoListObject = 
    {description: newTask, dueDate: moment(dueDate,"YYYY-MM-DD"),priority: taskPriority, completed: false, userId:1};
    console.log ("to do list " + todoListObject.description);
    axios.post('https://2xo2bg7ux6.execute-api.eu-west-2.amazonaws.com/dev/tasks', 
      todoListObject)
      .then(result => {
        const taskId = result.data.taskId;
        todoListObject.taskId = taskId;
        newTasks.push(todoListObject);
        // Always use setState to update any part of the state which needs to change
        this.setState({
            todoListItems: newTasks
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // delete task
  deleteTask = (idTaskToDelete) => {
    // delete an existing task from the task list
    axios.delete(`https://2xo2bg7ux6.execute-api.eu-west-2.amazonaws.com/dev/tasks/${idTaskToDelete}`)
    // Note: Do not need a fresh copy of the todoListItems array
    // here because filter makes its own copy of the array
    .then((res) => {
      //filter the array copy to remove the existingTask 
      const newTaskList = this.state.todoListItems.filter((taskObject) => {
        // return all values except the task to be deleted
        // use the unique id of the task to locate the task in 
        // the array of objects
        return (taskObject.taskId !== idTaskToDelete);
      });
    
      // Always use setState to update any part of the state which needs to change
      this.setState({
        todoListItems: newTaskList
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
  // mark task completed
  completedTask = (idCompletedObject) => {

    // mark at task in the list as completed
    axios.put(`https://2xo2bg7ux6.execute-api.eu-west-2.amazonaws.com/dev/tasks/${idCompletedObject}`)
      
    // Note: do not need a copy of the array because
    // map makes its own copy

    //change code here to update completed tasks
    .then(() => {
      // With a map, get each item
      // if the id is equal to the item's id, we change the completed property
      // set state
      const newTaskList = this.state.todoListItems.map((taskObject) => {
        // return all values without modification
        // except update the selected object to completed
        // use unique id of the task object to locate the object
        // in the array of tasks
        if (taskObject.taskId !== idCompletedObject) {
            return taskObject
        } else {
          return {description: taskObject.description, dueDate: taskObject.dueDate, 
            completed:true, priority: taskObject.priority, taskId: taskObject.taskId }
        }
      });
      // Always use setState to update any part of the state which needs to change
      this.setState({
        todoListItems: newTaskList
      });
    })
    .catch(err => {
      console.log(err);
    })
    
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
