import React, {Component} from 'react';
// bringing in React Component
// conditional formatting of each row item
// depending on whether row is odd numbered row
// first, third, fifth.. row row index (0,2,4....)
// or even numbered 
// second, fourth, sixth... row index (1,3,5,7)
class RowItem extends Component {
    render() {
        if (this.props.rowIndex%2 === 0) {
            return (
                <div class="row align-items-center oddRow">
                    <div class="col-8 firstCol">
                        {this.props.text}
                    </div>
                    <div class="col-sm-2 buttonCol">
                        <input class = "btn btn-outline-primary" 
                                id="doneTask1" type="submit" value="Done">
                        </input>               
                        <label class = "sr-only" for="doneTask1">
                                Completed task 1
                        </label>
                    </div>
                    <div class="col-sm-2 buttonCol">
                        <input class = "btn btn-outline-primary" id="deleteTask1" type="submit" value="Delete">
                        </input>                   
                        <label class = "sr-only" for="deleteTask1">
                            Delete task 1
                        </label>
                    </div>
                </div>
            );   
        } else {
            return (
                <div class="row align-items-center evenRow">
                    <div class="col-8 firstCol">
                        {this.props.text}
                    </div>
                    <div class="col-sm-2 buttonCol">
                        <input class = "btn btn-outline-primary" 
                            id="doneTask1" type="submit" value="Done">
                        </input>               
                        <label class = "sr-only" for="doneTask1">
                            Completed task 1
                        </label>
                    </div>
                    <div class="col-sm-2 buttonCol">
                        <input class = "btn btn-outline-primary" id="deleteTask1" type="submit" value="Delete">
                        </input>                   
                        <label class = "sr-only" for="deleteTask1">
                            Delete task 1
                        </label>
                    </div>
                </div>
            );
        }
    }
}
// ES6 feature
export default RowItem;