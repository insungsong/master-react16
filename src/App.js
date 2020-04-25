import React, { Component, Fragment } from "react";

class ReturnTypes extends Component {
  render() {
    return "Hello!";
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <ReturnTypes />
      </>
    );
  }
}

export default App;
