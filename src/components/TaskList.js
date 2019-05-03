import React from 'react';
import RowItem from './RowItems';
// apply TaskList stylesheet to TaskList section
import './TaskList.css';
//if (this.outstandingTasksOnly) {
 //   const taskRowArray = this.props.ListfromParent.filter((taskObject) => {
//        return taskObject.completed = false;
//    })
//} else {
//    const taskRowArray = this.props.ListfromParent;
//}

// bringing in React Component
// task list section 
//Note: use => notation in map function to prevent errors
class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {outstandingTasksOnly: false}
        this.tasksFilterChanged = this.tasksFilterChanged.bind(this)
    }
    
    
    // handle input/removal of text in
    // input box, which has id = textNewTask
    tasksFilterChanged = (event) => {
        this.setState({outstandingTasksOnly: !this.state.outstandingTasksOnly})  
        
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
                    {this.props.listfromParent.filter((taskObject) => {
                        if (this.state.outstandingTasksOnly) {
                            return taskObject.completed === false;
                        } else {
                            return taskObject;
                        }
                    }).map((taskObject, index) => {
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