import React from 'react';
// apply RowItems stylesheet to RowItems section
import './RowItems.css';
import moment from "moment";

// bringing in React Component
// conditional formatting of each row item
// depending on whether row is odd numbered row
// first, third, fifth.. row row index (0,2,4....)
// or even numbered 
// second, fourth, sixth... row index (1,3,5,7)
// updated to use dynamic class creation following
// week 5 homework feedback
class RowItem extends React.Component {
    
    // completed button clicked
    doneTaskClicked = () => {
        this.props.completedTask(this.props.tskObject.taskId)
    }
    // delete button clicked
    deleteTaskClicked = () => {
     // ask user to confirm delete is required
     if (window.confirm("Are you sure you want to delete this task?")) {
        this.props.deleteTask(this.props.tskObject.taskId); 
        // remove focus from delete button
        document.activeElement.blur();
     }
    // remove focus from the delete button
    //document.getElementById("deleteTask").blur();
     document.activeElement.blur();
    }
    render() {
        const oddEvenClass = this.props.rowIndex % 2 === 0 ? 
            'oddRow' : 'evenRow';
        const priorityText = (this.props.tskObject.priority) &&
            'highlightText';
        const completedText = this.props.tskObject.completed && 'strikethroughText';
       
        return (
            <div className=
                {`row align-items-center ${oddEvenClass} ${priorityText}`}>
                <div className= {`col-3 firstCol ${completedText}`}>
                    {this.props.tskObject.description}
                </div>
                <div className= {`col-2 firstCol ${completedText}`}>
                {moment(this.props.tskObject.dueDate).isBefore(moment(),"day") && (!this.props.tskObject.completed)?
                    <span className = "overdueDate">
                        {moment(this.props.tskObject.dueDate).format("DD/MM/YYYY")} 
                    </span>
                    :     
                    moment(this.props.tskObject.dueDate).format("DD/MM/YYYY")
                }
                </div>
                <div className = "col-md-3 firstCol">
                    {this.props.tskObject.priority ? 
                        <span className = "badge-pill badge-danger" id="highPriorityTask">
                                High priority
                        </span>
                        : null
                    }
                <span className="sr-only" htmlFor  = "highPriorityTask">
                    Whether task is high priority
                </span>
                </div>
                <div className="col-md-2 buttonCol">
                    {this.props.tskObject.completed ? 
                        <input className = "btn btn-outline-primary" 
                            id="doneTask" type="submit" 
                            disabled
                            value="Done"
                            onClick={this.doneTaskClicked}>
                        </input> :
                        <input className = "btn btn-outline-primary" 
                        id="doneTask" type="submit" 
                        value="Done"
                        onClick={this.doneTaskClicked}>
                        </input>  
                    }              
                    <label className = "sr-only" htmlFor="doneTask">
                        Completed task
                    </label>
                </div>
                <div className="col-md-2 buttonCol">
                    <input className = "btn btn-outline-primary" 
                        id="deleteTask" type="submit" 
                        value="Delete"
                        onClick={this.deleteTaskClicked}>
                    </input>                   
                    <label className = "sr-only" htmlFor="deleteTask">
                        Delete task
                    </label>
                </div>
            </div>
        );   
    }
}
// ES6 feature
export default RowItem;