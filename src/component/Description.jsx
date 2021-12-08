import React from "react";
import { Component } from "react";

class Description extends Component {
    render() {
        return (
            <div className="desc">
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Description;
