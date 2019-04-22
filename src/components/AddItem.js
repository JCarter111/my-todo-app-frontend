import React, {Component} from "react";
import './AddItem.css';
// add new task form
// using Bootstrap inline form class
// with accessibility for screen readers
class AddItem extends Component {
    render () {
        return (
            <div id="addTaskToList" class = "standardDiv">
                <div id="addTasks" class = "container">
                    <div class="row align-items-left">
                        <div class="col-12 firstCol">
                            <form class = "form-inline" 
                                id="addNewTaskForm">
                                <label class="sr-only" 
                                    for="addNewTaskForm">
                                    Add a new task to the list
                                </label>
                                <input class = "form-control" 
                                    id="textNewTask" 
                                    type="text" name="addTask">
                                </input>
                                <label class = "sr-only" 
                                    for="textNewTask">
                                    Input a new task
                                </label>
                                <input id="addNewTask" 
                                    class = "btn btn-primary" 
                                    type="submit" value="Add">
                                </input>
                                <label class = "sr-only" 
                                    for="addNewTask">
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