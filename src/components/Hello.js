import React from "react";


export default class Hello extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        text: 'Hi callbacks'
      };
    }
  
    componentDidMount () {
      setTimeout(() => {
        this.setState({ text: 'I hope you like them' });
      }, 1500);
      setTimeout(() => {
        this.setState({ text: 'Enjoy' });
      }, 2000);
    }

   
  
    render () {
      return <h1>{this.state.text}</h1>;
    }
  };
  
