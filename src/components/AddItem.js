import React, {Component} from "react";
import './AddItem.css';
// add new task form
// using Bootstrap inline form class
// with accessibility for screen readers
class AddItem extends Component {
    render () {
        return (
            <div id="addTaskToList" className = "standardDiv">
                <div id="addTasks" className = "container">
                    <div className ="row align-items-left">
                        <div className ="col-12 firstCol">
                            <form className = "form-inline" 
                                id="addNewTaskForm">
                                <label className ="sr-only" 
                                    htmlFor="addNewTaskForm">
                                    Add a new task to the list
                                </label>
                                <input className = "form-control" 
                                    id="textNewTask" 
                                    type="text" name="addTask">
                                </input>
                                <label className = "sr-only" 
                                    htmlFor="textNewTask">
                                    Input a new task
                                </label>
                                <input id="addNewTask" 
                                    className = "btn btn-primary" 
                                    type="submit" value="Add">
                                </input>
                                <label className = "sr-only" 
                                    htmlFor="addNewTask">
                                    Submit new task
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
    }   
}
export default AddItem;