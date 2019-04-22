import React, {Component} from 'react';
// apply Footer stylesheet to Footer section
import './Footer.css';
// bringing in React Component
// footer section 
class Footer extends Component {
    render() {
        return (
            <footer id = "toDoListFooter">
                &copy; Jackie - last update April 2019
            </footer> 
        );
    }
}
// ES6 feature
export default Footer;