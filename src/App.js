import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav text="Welcome to my App" />
       <Nav text="Contact Page"/>
       <Nav text="About Us"/>
       <h4>Here is a list of things I need to do</h4>
       <ul>
         <li>
           Buy cough sweets
           <button>Done</button>
           <button>Delete</button>
         </li>
         <li>
           Do the washing
           <button>Done</button>
           <button>Delete</button>
         </li>
         <li>
           Buy an Easter egg
           <button>Done</button>
           <button>Delete</button>
         </li>
       </ul>
      </div>
    );
  }
}

export default App;
