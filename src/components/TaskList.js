import React, {Component} from 'react';
import RowItem from './RowItems';
// apply TaskList stylesheet to TaskList section
import './TaskList.css';

// bringing in React Component
// task list section 
//return <RowItem text ={item} />
class TaskList extends Component {
    render() {
        return (
            <div id="showOutstandingTasks" className = "standardDiv"> 
                <div id="taskTable" className = "container">
                    {this.props.listfromParent.map(function(object, index) {
                    return <RowItem 
                    text = {object.todoItem}
                    rowIndex = {index}
                    key = {object.todoItem + index}  
                    />
                    })}
                </div>
            </div>
        );
    }
}
// ES6 feature
export default TaskList;