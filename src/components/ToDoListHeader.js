import React, {Component} from 'react';
import ToDoPic from './images/Shopping_List.jpg';
// apply To Do List Header stylesheet to this section
import './ToDoListHeader.css';

// bringing in React Component
// header section 
// needs image to be added
class ToDoListHeader extends Component {
    render() {
        return (
            <div id="toDoListHeading" class = "container">
                <div id="toDoListRow" class = "row">
                    <div class="col-8 column1"> 
                        <h1>{this.props.text}</h1>
                    </div>
                    <div class="col-4 column2">
                    <img id="imgToDoList" alt="To Do List" 
                      src={ToDoPic}/>
                    </div>
                </div>
            </div>
        );
    }
}
// ES6 feature
export default ToDoListHeader;