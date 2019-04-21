import React, {Component} from 'react';
// bringing in React Component
class RowItem extends Component {
    render() {
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
    }
}
// ES6 feature
export default RowItem;