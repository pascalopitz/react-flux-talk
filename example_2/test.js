class Counter extends React.Component {
    componentDidUpdate () {
        console.log('Child updated with props', this.props);
    }

    render () {
        return (<p>Current value: {this.props.value}</p>);
    }
}

class Parent extends React.Component {
    constructor () {
        super();
        this.state = { clicks: 0 };
    }

    componentDidUpdate () {
        console.log('Parent updated', this.state);
    }

    increment () {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    render () {
        return (
            <div>
                <Counter value={this.state.clicks}/>
                <button onClick={this.increment.bind(this)}>Increment</button>
            </div>
        );
    }
}

React.render(<Parent />, document.body);