import React, { Component } from 'react';

class Converter extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                type1: 0,
                type2: 0,
                name1: "",
                name2: ""
            };
    }

    componentDidMount() {
        let nameArray = this.props.name.split("-");
        this.setState({ name1: nameArray[0], name2: nameArray[1] });
    }

    convert = e => {
        if (e.target.id === this.state.name1) {
            let type2 = e.target.value * this.props.factor;
            this.setState({ type1: e.target.value, type2: type2 });
        } else if (e.target.id === this.state.name2) {
            let type1 = e.target.value / this.props.factor;
            this.setState({ type2: e.target.value, type1: type1 });
        }
    }

    inputGen = () => {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <label>{this.state.name1}: </label>
                    <input type="number" id={this.state.name1} className="form-control" onChange={this.convert} value={this.state.type1} />
                    <label>{this.state.name2}:</label>
                    <input type="number" id={this.state.name2} className="form-control" onChange={this.convert} value={this.state.type2} />
                </div>
            </form>
        );
    }

    render() {
        return (
            <div className={this.props.name}>
                <h1>{this.props.name} converter</h1>
                {this.inputGen()}
            </div>
        );
    }
}
export default Converter;