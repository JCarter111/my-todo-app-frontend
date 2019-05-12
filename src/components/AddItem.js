import React from "react";
import './AddItem.css';
import moment from "moment"
// add new task form
// using Bootstrap inline form class
// with accessibility for screen readers
class AddItem extends React.Component {
    state = {
        text: '',
        date: '',
        dateInvalid: false,
        priority: false,
        selectedOption: "normalPriority",
    }

    // create ref to manage focusing on the text input 
    // box textNewTask after adding a new task
    // using guidance on link below
    // https://reactjs.org/docs/refs-and-the-dom.html
    // need a constructor to bind the addNewTaskClicked
    // event handling method to textNewTask
    constructor(props) {
        // always need super(props)
        // as first line in a constructor
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        // create a ref to store the dateInput DOM element
        this.dateInput = React.createRef();
        // constructor to bind add new task button click
        // to task input form textInput
        this.addNewTaskClicked = this.addNewTaskClicked.bind(this);
        // constructor to bind high priority task radiobutton
        // to the task priority state in this component
        // bind taskFilterChanged event handler to outstanding tasks state
        this.radioPriorityChanged = this.radioPriorityChanged.bind(this);
      }
    
    // handle input/removal of text in
    // input box, which has id = textNewTask
    textNewTaskChanged = (event) => {
        this.setState({
            text: event.target.value
        })   
    }

    // handle input/removal of date in
    // date box, which has id = textDueDateChanged
    textDueDateChanged = (event) => {
        this.setState({
            date: event.target.value
        })   
    }

    // handle change of radiobutton selection when new task created
    // input box, which has id = textNewTask
    radioPriorityChanged = (event) => {  
        this.setState({
            selectedOption: event.target.value
        }) 
        this.setState({
            priority: (event.target.value ==="highPriority")
        }) 
    }

    // handle button click
    // Add button has id = addNewTask
    addNewTaskClicked = e => {
        // prevent default submit behaviour of the form 
        // containing the add Task button
        e.preventDefault();
        const newTask = this.state.text;
        const newTaskDueDate = moment(this.state.date);
        const newTaskPriority = this.state.priority;
        //validation - only add none blank text
        // strings to the list of tasks
        if (newTask.length > 0){
            // check that the task date is valid
            if (newTaskDueDate.isValid()){
                // add new task to list
                this.props.addTask(newTask, newTaskDueDate, newTaskPriority);
                // reset text to blank
                // reset default priority of task to normal
                // set radio buttons to default to normal priority
                this.setState({
                        text: '',
                        date: '',
                        dateInvalid: false,
                        priority: false,
                        selectedOption: "normalPriority"
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
            } else {
                // task date is invalid, need error message on the screen
                this.setState({
                        dateInvalid: true
                })
                this.dateInput.current.focus();
            } 
        }
    }
    render () {
        return (
            <div id="addTaskToList" className = "standardDiv">
                <div id="addTasks" className = "container">
                    <div className ="row align-items-left">
                        <div className ="col-12 firstCol">
                            <form 
                                id="addNewTaskForm">
                                <label className ="sr-only" 
                                    htmlFor="addNewTaskForm">
                                    Add a new task to the list
                                </label>
                                <div className = "form-group">
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
                                </div>
                                <div className = "form-group">
                                    Due date for task:
                                    <span class = "invalidDate">
                                        {this.state.dateInvalid &&
                                        " Please enter a valid date"
                                        }
                                    </span>
                                <input className = "form-control" 
                                    id="textTaskDueDate" 
                                    type="date" name="addDueDate"
                                    value={this.state.date}
                                    onChange={this.textDueDateChanged}
                                    ref={this.dateInput}>
                                </input>
                                <label className = "sr-only" 
                                    htmlFor="textTaskDueDate">
                                    Due date for task
                                </label>
                                </div>
                                <div className = "form-group form-check-inline" >
                                <input className="form-check-input" 
                                type="radio" name="exampleRadios" 
                                id="priorityRadios" value="normalPriority" 
                                checked = {this.state.selectedOption === "normalPriority"} 
                                onChange =
                                {(event) => this.radioPriorityChanged(event)}>
                                </input>
                                <label className="form-check-label" htmlFor="priorityRadios">
                                    Standard Priority
                                </label>
                                <label className = "sr-only" 
                                    htmlFor="priorityRadios">
                                    Mark task as normal priority - default setting
                                </label>
                                </div>
                                <div className = "form-group  form-check-inline">
                                <input className="form-check-input" type="radio" 
                                name="exampleRadios" id="priorityRadios" 
                                checked = {this.state.selectedOption === "highPriority"}
                                value="highPriority"
                                onChange =
                                {(event) => this.radioPriorityChanged(event)}>
                                </input>
                                <label className="form-check-label" htmlFor="priorityRadios">
                                    High Priority
                                </label>
                                <label className = "sr-only" 
                                    htmlFor="priorityRadios">
                                    Mark task as high priority
                                </label>
                                </div>
                                <div className = "form-group">
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
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
    }   
}
export default AddItem;