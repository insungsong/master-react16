import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const Message = () => "Just touched this";

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
        <Portals />
      </>
    );
  }
}

export default App;
