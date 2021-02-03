import React, { Component } from "react"

class Ingredient extends Component {
    render() {
        return (
            <p>{this.props.name}<button onClick={this.props.addItem}> Add to burger </button></p>
        )
    }
}

export default Ingredient