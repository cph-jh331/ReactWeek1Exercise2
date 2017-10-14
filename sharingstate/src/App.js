import React, { Component } from 'react';
import Converter from './components/Converter';
class App extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        converters: [
          { name: "kilo-pound", factor: 2.2 },
          { name: "kilo-ounce", factor: 35.27 }
        ]
      };
  }

  /*
    The exercise says:
    Use props to pass 2 things to the component:

    first is the name (what does it convert)

    second is the function (how does it convert).

    Hint: the convert() method from previous exercise is moved 
    up to the parent component and passed to the converter with 
    props. This means that state is now maintained in the parent 
    component.

    That hint... I do not understand it. Why would I move a method
    that belongs inside of another class up to here, instead of
    just passing the name of the converter and the factor between
    the two units? If I need to expand the functionality of the
    converter, would I not just pass another non-function prop and
    refractor the converter around that?
  */    

  genConverters = () => {
    return this.state.converters
      //key is not a prop.
      .map(converter => <Converter key={converter.name} name={converter.name} factor={converter.factor} />);
  }

  render() {
    return (
      <div className="App">
        {this.genConverters()}
      </div>
    );
  }
}
export default App;
