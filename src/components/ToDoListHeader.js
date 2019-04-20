import React, {Component} from 'react';
// bringing in React Component
// header section 
// needs image to be added
class ToDoListHeader extends Component {
    render() {
        return (
            <div id="toDoListHeading" class = "container">
                <div id="toDoListRow" class = "row">
                    <div class="col-8 column1"> 
                        <h1>My To Do List</h1>
                    </div>
                    <div class="col-4 column2">
                        
                    </div>
                </div>
            </div>
        );
    }
}
// ES6 feature
export default ToDoListHeader;