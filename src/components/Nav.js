import React, {Component} from 'react';
// bringing in React Component
class Nav extends Component {
    render() {
        return (
            <nav>
                <h1>{this.props.text}</h1>
            </nav>
        );
    }
}
// ES6 feature
export default Nav;