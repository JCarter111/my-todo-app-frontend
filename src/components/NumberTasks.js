import React, {Component} from 'react';
// bringing in React Component
// section to show number of outstanding tasks
class NumberTasks extends Component {
    render() {
        return (
            <div id="countOutstandingTasks" class = "standardDiv">
                <div id="displayOutstandingTasks" class = "container">
                    <div class = "row">
                        <div id="tasksText" class = "col-4">
                            Things to do:
                        </div>
                        <div id = "noOfTasks" class = "col-8">
                            <span class = "badge-pill badge-primary">{this.props.text}
                            </span>
                            <span class="sr-only">Tasks outstanding</span>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}
// ES6 feature
export default NumberTasks;