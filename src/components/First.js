import React, { Component } from 'react'

export default class First extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    updateCount() {
        this.setState((prevState, props) => {
            return { count: prevState.count + 1 }
        });
    }
    render() {
        return (
            <div>
                <button
                    onClick={() => this.updateCount()}
                >
                    Clicked {this.state.count} times
              </button>
            </div>
        )
    }
}
