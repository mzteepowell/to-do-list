import React from 'react';
import './App.css';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxes: {
                type: "checkbox"
            },
            input: "",
            answer: true
         };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
    this.setState({input: event.target.value});
    this.setState({answer: false});
    }

    render() {
        return (            
            <div className="check-box">
                <input 
                type={this.state.checkboxes.type} 
                disabled={this.state.answer}
                />
                <input
                type="text"
                className={this.crossList}
                placeholder="Enter a new task"
                value={this.state.input}
                onChange={this.handleInputChange}
                />
                </div>
        );
    }
}

export default Items;