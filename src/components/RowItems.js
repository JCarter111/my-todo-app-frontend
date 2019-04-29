import React from 'react';
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
        this.props.completedTask(this.props.tskObject)
    }
    // delete button clicked
    deleteTaskClicked = () => {
     // ask user to confirm delete is required
     if (window.confirm("Are you sure you want to delete this task?")) {
        this.props.deleteTask(this.props.tskObject); 
        
     } else {
        // delete cancelled - take the focus off the delete button
        document.getElementById("deleteTask").blur();
     }
    }
    render() {
        const oddEvenClass = this.props.rowIndex % 2 === 0 ? 
            'oddRow' : 'evenRow';
        return (
            <div className={`row align-items-center ${oddEvenClass}`}>
                <div className="col-6 firstCol">
                    {this.props.tskObject.todoItem}
                </div>
                <div className = "col-md-2 firstCol">
                    {this.props.tskObject.completed ? 
                        <span className = "badge-pill badge-primary">
                                completed
                        </span>
                        : null
                    }
                <span className="sr-only">Whether task has been completed</span>
                </div>
                <div className="col-md-2 buttonCol">
                    {this.props.tskObject.completed ? 
                        <input className = "btn btn-outline-primary" 
                            id="doneTask" type="submit" 
                            disabled
                            value="Done"
                            onClick={this.doneTaskClicked}>
                        </input>  :
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