import React from 'react';
import RowItem from './RowItems';
import moment from "moment";
import taskFilter from '../helpers/taskFilter';


// bringing in React Component
// task list section 
//Note: use => notation in map function to prevent errors

class TaskList extends React.Component {
    state = {
        outstandingTasksOnly: false,
        priorityTasksOnly: false,
        overdueTasksOnly: false
    }
    // constructor to bind outstanding tasks only checkbox
    // to the outstanding tasks only state in this component
    constructor(props) {
        // super(props) required as first statement in a constructor
        super(props)
        // bind taskFilterChanged event handler to outstanding tasks state
        this.tasksFilterChanged = this.tasksFilterChanged.bind(this)
        // bind taskFilterChanged event handler to outstanding tasks state
        this.priorityFilterChanged = this.priorityFilterChanged.bind(this)
        // bind taskFilterChanged event handler to outstanding tasks state
        this.overdueFilterChanged = this.overdueFilterChanged.bind(this)
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
    // handle selection of overdue tasks only
    // when checkbox selected
    overdueFilterChanged = (event) => {
        this.setState({overdueTasksOnly: !this.state.overdueTasksOnly})  
        
    }
    render() { 
        //const filteredTasks = taskFilter(this.state, this.props.listfromParent, new Date().toISOString()) 
        // add to line 85 // {filteredTasks.sort().map()} - use filteredTasks function in separate
        // file instead of having filter code below  
        // needed 0 for false, 1 for true in filter logic now that database is being used
        // due to database data types  
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
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" 
                            type="checkbox" id="overdueTasksOnly" 
                            value="overdue tasks"
                            onClick = {(event) => this.overdueFilterChanged(event)}>
                        </input>
                        <label className="form-check-label" 
                            htmlFor="overdueTasksOnly">Show overdue outstanding tasks only
                        </label>
                    </div>
                    
                    {this.props.listfromParent.filter((taskObject) => {
                        if (this.state.outstandingTasksOnly) {
                            return taskObject.completed === 0;
                        } else {
                            return taskObject;
                        }
                    })
                    .filter((taskObject) => {
                        if (this.state.priorityTasksOnly) {
                            return taskObject.priority === 1;
                        } else {
                            return taskObject;
                        }
                    })
                    .filter((taskObject) => {
                        if (this.state.overdueTasksOnly) {
                            return (moment(taskObject.dueDate).isBefore(moment(),"day") 
                            && taskObject.completed === 0);
                        } else {
                            return taskObject;
                        }
                    })
                    // used moment to ensure database date is interpreted
                    // in correct date format for sort
                    .sort((a,b) => moment(a.dueDate) - moment(b.dueDate))
                    //.sort((a,b) => a.dueDate - b.dueDate)
                    .map((taskObject, index) => {
                    return <RowItem 
                    tskObject = {taskObject}
                    rowIndex = {index}
                    key = {taskObject.description + index}  
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