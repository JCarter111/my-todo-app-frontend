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
            <div id="showOutstandingTasks" class = "standardDiv"> 
                <div id="taskTable" class = "container">
                    {this.props.listfromParent.map(function(item) {
                    return <RowItem text = {item}/>
                    })}
                </div>
            </div>
        );
    }
}
// ES6 feature
export default TaskList;