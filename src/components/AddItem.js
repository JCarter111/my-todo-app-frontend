import React, {Component} from "react";
class AddItem extends Component {
    render () {
        return (
        <div>
            <form>
                <label>Your new todo:</label>
                <input type = "text" />
                <button type = "button">Add</button>
            </form>
        </div>
    );
    }   
}
export default AddItem;