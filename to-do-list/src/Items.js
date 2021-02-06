import React, { PureComponent } from 'react';
import './App.css';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxes: {
                type: "checkbox"
            },
            input: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
    this.setState({input: event.target.value});
    }

    handleCheckboxChange(event) {
       this.setState({input: event.target.value}.style.textDecoration = 'line-through');
    }
    render() {
        return (            
            <div className="check-box">
                <input 
                type={this.state.checkboxes.type} 
                onChange={this.handleCheckboxChange}/>
                <input
                type="text"
                placeholder="Enter a new task"
                value={this.state.input}
                name="filterText"
                onChange={this.handleInputChange}
                />
                </div>
        );
    }
}

export default Items;