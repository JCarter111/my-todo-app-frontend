import React from 'react';
import RowItem from './RowItems';



// bringing in React Component
// task list section 
//Note: use => notation in map function to prevent errors

class TaskList extends React.Component {
    // constructor to bind outstanding tasks only checkbox
    // to the outstanding tasks only state in this component
    constructor(props) {
        // super(props) required as first statement in a constructor
        super(props)
        // create outstanding task state in this component
        this.state = {outstandingTasksOnly: false}
        // bind taskFilterChanged event handler to outstanding tasks state
        this.tasksFilterChanged = this.tasksFilterChanged.bind(this)
        // create priority task state in this component
        this.state = {priorityTasksOnly: false}
        // bind taskFilterChanged event handler to outstanding tasks state
        this.priorityFilterChanged = this.priorityFilterChanged.bind(this)
    }
    
    
    // handle selection of outstanding tasks only
    // when checkbox selected
    tasksFilterChanged = (event) => {
        this.setState({outstandingTasksOnly: !this.state.outstandingTasksOnly})  
        
    }
    // handle selection of outstanding tasks only
    // when checkbox selected
    priorityFilterChanged = (event) => {
        this.setState({priorityTasksOnly: !this.state.priorityTasksOnly})  
        
    }

    render() {      
        return (
            <div id="showOutstandingTasks" className = "standardDiv"> 
                
                <div id="taskTable" className = "container">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" 
                            type="checkbox" id="outstandingTasksOnly" 
                            value="outstanding tasks"
                            onClick = {(event) => this.tasksFilterChanged(event)}>
                        </input>
                        <label className="form-check-label" 
                            htmlFor="outstandingTasksOnly">Show outstanding tasks only
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" 
                            type="checkbox" id="priorityTasksOnly" 
                            value="priority tasks"
                            onClick = {(event) => this.priorityFilterChanged(event)}>
                        </input>
                        <label className="form-check-label" 
                            htmlFor="priorityTasksOnly">Show high priority tasks only
                        </label>
                    </div>
                    {this.props.listfromParent.filter((taskObject) => {
                        if (this.state.outstandingTasksOnly) {
                            return taskObject.completed === false;
                        } else {
                            return taskObject;
                        }
                    })
                    .filter((taskObject) => {
                        if (this.state.priorityTasksOnly) {
                            return taskObject.priority === true;
                        } else {
                            return taskObject;
                        }
                    })
                    .map((taskObject, index) => {
                    return <RowItem 
                    tskObject = {taskObject}
                    rowIndex = {index}
                    key = {taskObject.todoItem + index}  
                    deleteTask={this.props.deleteTask}
                    completedTask = {this.props.completedTask}
                    />
                    })}
                    
                </div>
            </div>
        );
    }
}
// ES6 feature
export default TaskList;