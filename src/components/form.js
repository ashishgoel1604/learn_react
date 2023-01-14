import { Component } from "react";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            remarks: '',
            ageGroup: ''
        }
    }

    handleNameChange = (event) => {
        console.log('name updated')
        this.setState((prevState) => {
            return {
                ...prevState,
                name: event.target.value
            }
        });
    }

    handleRemarksChange = (event) => {
        console.log('remarks updated')
        this.setState((prevState) => {
            return {
                ...prevState,
                remarks: event.target.value
            }
        });
    }

    handleAGChange = (event) => {
        console.log('age group updated')
        this.setState((prevState) => {
            return {
                ...prevState,
                ageGroup: event.target.value
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Hi, Welcome to  My Form</h1>
                <br />
                <br />
                <span>
                    <label>Name : </label> &nbsp; &nbsp; <input type='text' value={this.state.name} onChange={this.handleNameChange} />
                </span>
                <br />
                <br />
                <span>
                    <label>Remarks : </label> &nbsp; &nbsp; <textarea value={this.state.remarks} onChange={this.handleRemarksChange} />
                </span>
                <br />
                <br />
                <span>
                    <label>Age Group : </label> &nbsp; &nbsp;
                    <select value={this.state.ageGroup} onChange={this.handleAGChange}>
                        <option value=''>Select Age Group</option>
                        <option value='kids'>Kids</option>
                        <option value='adults'>Adults</option>
                        <option value='seniors'>Senior Citizens</option>
                    </select>
                </span>
                <br />
                <br />
                <button type="submit">Submit</button>
            </div>
        );
    };
}

export default Form;