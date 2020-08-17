import React from "react";

import "./Car.scss";
import Box from "./Box.js";

export default class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red", show: "true" };
  }
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    alert("from getSnapshotBeforeUpdate old colr" + prevState.color);
  }
  componentDidUpdate() {
    alert("updtae componentDidUpdate");
  }
  changcolor = () => {
    this.setState({ color: "white", show: true });
  };
  deleteit = () => {
    this.setState({ show: false });
  };
  render() {
    let mybox;
    if (this.state.show) {
      mybox = <Box type="rec" />;
    }
    return (
      <div>
        {mybox}
        <h1>
          I am a {this.props.case} ! with color {this.state.color}
        </h1>
        <button onClick={this.changcolor}>Change color</button>
        <button onClick={this.deleteit}>delete Box</button>
      </div>
    );
  }
}
