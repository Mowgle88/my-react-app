import React from 'react';

interface CountProps {
  count: number,
}

interface CountState {
    count: number,
  }

export class ClassCounter extends React.Component<CountProps, CountState> {

    constructor(props: CountProps) {
        super(props);
        this.state = {
            count: props.count
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1})
    }

    decrement() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>- Decrement -</button>
                <button onClick={this.increment}>+ Increment +</button>
            </div>
        )
    }
}
