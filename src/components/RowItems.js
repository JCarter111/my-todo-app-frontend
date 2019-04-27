import React, {Component} from 'react';
// bringing in React Component
// conditional formatting of each row item
// depending on whether row is odd numbered row
// first, third, fifth.. row row index (0,2,4....)
// or even numbered 
// second, fourth, sixth... row index (1,3,5,7)
// updated to use dynamic class creation following
// week 5 homework feedback
class RowItem extends Component {

    // completed button clicked
    doneTaskClicked = () => {

    }
    // delete button clicked
    deleteTaskClicked = () => {
     // confirm delete
     //if (confirm("Are you sure you want to delete this task?")) {

     //}  
    }

    render() {
        const oddEvenClass = this.props.rowIndex % 2 === 0 ? 
            'oddRow' : 'evenRow';
        return (
            <div className={`row align-items-center ${oddEvenClass}`}>
                <div className="col-8 firstCol">
                    {this.props.text}
                </div>
                <div className="col-sm-2 buttonCol">
                    <input className = "btn btn-outline-primary" 
                        id="doneTask" type="submit" 
                        value="Done"
                        onClick={this.doneTaskClicked}>
                    </input>               
                    <label className = "sr-only" htmlFor="doneTask">
                        Completed task
                    </label>
                </div>
                <div className="col-sm-2 buttonCol">
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