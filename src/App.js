import React, { Component } from 'react';
import Navbard from './ui/Navbar';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbard />
        {this.props.children}
      </div>
    );
  }
}

export default App;
