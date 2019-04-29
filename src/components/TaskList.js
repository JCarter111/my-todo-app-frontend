import React from 'react';
import RowItem from './RowItems';
// apply TaskList stylesheet to TaskList section
import './TaskList.css';

// bringing in React Component
// task list section 
//Note: use => notation in map function to prevent errors
class TaskList extends React.Component {
    render() {
        return (
            <div id="showOutstandingTasks" className = "standardDiv"> 
                <div id="taskTable" className = "container">
                    {this.props.listfromParent.map((taskObject, index) => {
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