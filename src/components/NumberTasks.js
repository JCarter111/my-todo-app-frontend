import React, {Component} from 'react';

// bringing in React Component
// section to show number of outstanding tasks
class NumberTasks extends Component {  
    render() {
        return ( 
            <div id="countOutstandingTasks" className = "standardDiv">
                <div id="displayOutstandingTasks" className = "container">
                    <div className = "row">
                        <div id="tasksText" className = "col-4">
                            Things to do:
                        </div>
                        <div id = "noOfTasks" className = "col-8">
                            <span className = "badge-pill badge-primary">
                                {this.props.countTasks}
                            </span>
                            <span className="sr-only">Tasks outstanding</span>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}
// ES6 feature
export default NumberTasks;