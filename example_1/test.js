var data = {
    foo: "bar",
    test: "great",
}

class FormField extends React.Component {
    render () {
        return (
            <p className="row">
                <label for={this.props.key}>{this.props.key}</label>
                <input id={this.props.key} value={this.props.value} />
            </p>
        );
    }
}

class Form extends React.Component {
    render () {
        var fields = Object.keys(data).map((key) => {
            return <FormField value={data[key]} key={key} />
        });

        return (
            <form id="my-form" className="a-form">
                {{fields}}
                <button>Do Something</button>
            </form>
        );
    }
}

React.render(<Form />, document.body);