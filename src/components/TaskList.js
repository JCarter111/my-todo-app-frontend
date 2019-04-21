import React, {Component} from 'react';
import RowItem from './RowItems';

//{todoListItems.map(function(item){
//    return <ListItem text ={item} />
//{this.props.toListItems.map(function(item){
//    return {item};
//})};
//{this.props.fish.map(function(item){
//    return <p>{item}</p>;
//})}


// bringing in React Component
// task list section 
//return <RowItem text ={item} />
class TaskList extends Component {
    render() {
        return (
            <div id="taskTable" class = "container">
            {this.props.listfromParent.map(function(item) {
                return <RowItem text = {item}/>
            })}
            </div>
        );
    }
}
// ES6 feature
export default TaskList;