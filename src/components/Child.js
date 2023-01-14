import { Component } from "react";

class Child extends Component {

    render() {
        // let { childListener } = this.props;
        return (
            <div>
                <br />
                <br />
                <h1>Hi, I am Child {this.props.childName}. I will send message to parent....</h1>
                <button onClick={() => this.props.childListener(`Hello Parent from ${this.props.childName}...!`)}>Send Message</button>
            </div>
        );
    };
}

export default Child;