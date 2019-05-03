import React from "react";
import './AddItem.css';
// add new task form
// using Bootstrap inline form class
// with accessibility for screen readers
class AddItem extends React.Component {
    state = {
        text: ''
    }

    // create ref to manage focusing on the text input 
    // box textNewTask when adding a new task
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.addNewTaskClicked = this.addNewTaskClicked.bind(this);
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
    addNewTaskClicked = e => {
        // prevent default submit behaviour of the form 
        // containing the add Task button
        e.preventDefault();
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
            // set focus back to the input text box - textNewTask
            // in case further tasks need to be added
            // Explicitly focus the text input using the raw DOM API
            // Note: we're accessing "current" to get the DOM node
            this.textInput.current.focus();
            // method above is better practice in React than
            // interacting directly with the document HTML object
            // as in commented code below
            //document.getElementById("textNewTask").focus()
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
                                    value={this.state.text}
                                    onChange={this.textNewTaskChanged}
                                    ref={this.textInput}>
                                </input>
                                <label className = "sr-only" 
                                    htmlFor="textNewTask">
                                    Input a new task
                                </label>
                                <input id="addNewTask" 
                                  className = "btn btn-primary" 
                                    type="submit" value="Add"
                                    onClick={this.addNewTaskClicked}
                                    >
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