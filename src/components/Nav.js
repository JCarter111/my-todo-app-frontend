import React from 'react';
// bringing in React Component
class Nav extends React.Component {
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