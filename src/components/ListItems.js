import React, {Component} from 'react';
// bringing in React Component
class ListItem extends Component {
    render() {
        return (
            <li>
                {this.props.text}
                <button>Done</button>
                <button>Delete</button>
            </li>
        );
    }
}
// ES6 feature
export default ListItem;