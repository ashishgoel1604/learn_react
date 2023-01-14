import { Component } from "react";
import Child from './Child';
import './myStyles.css';

class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            childMessage: 'No message yet !!!',
            allChildNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }
    childListener = (message) => {
        const allChildren = this.state.allChildNumbers;
        this.setState({
            childMessage: message,
            allChildNumbers: [...allChildren]
        })
    };
    render() {
        return (
            <div>
                <h1>Hi, I am Parent Component. I have 1 child....</h1>
                <h3 className='primary'>{this.state.childMessage}</h3>
                {this.state.allChildNumbers.map(child => <Child childListener={this.childListener} childName={`Child ${child}`} />)}
                {/* <Child childListener={this.childListener} childName='Child 1' />
                <Child childListener={this.childListener} childName='Child 2' />
                <Child childListener={this.childListener} childName='Child 3' />
                <Child childListener={this.childListener} childName='Child 4' /> */}
            </div>
        );
    };
}

export default Parent;