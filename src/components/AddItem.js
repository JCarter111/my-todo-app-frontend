import React from "react";
import './AddItem.css';
// add new task form
// using Bootstrap inline form class
// with accessibility for screen readers
class AddItem extends React.Component {
    state = {
        text: ''
    }
    // handle input/removal of text in
    // input box, which has id = textNewTask
    textNewTaskChanged = (event) => {
        this.setState({
            text: event.target.value
        })   
    }

    // handle button click
    // Add button has id = addNewTask
    addNewTaskClicked = () => {
        const newTask = this.state.text;
        //validation - only add none blank text
        // strings to the list of tasks
        if (newTask.length > 0){
            // add new task to list
            this.props.addTask(newTask);
            
            // reset text to blank
            this.setState({
                text: ''
            });
        }
    }
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
                                    placeholder = "Type your new task here"
                                    id="textNewTask" 
                                    type="text" name="addTask"
                                    value = {this.state.text}
                                    onChange = {this.textNewTaskChanged}>
                                </input>
                                <label className = "sr-only" 
                                    htmlFor="textNewTask">
                                    Input a new task
                                </label>
                                <input id="addNewTask" 
                                    className = "btn btn-primary" 
                                    type="submit" value="Add"
                                    onClick={this.addNewTaskClicked}>
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