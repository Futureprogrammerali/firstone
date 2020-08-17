import React from "react";

import styles from "./mystyle.box.css";

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red", type: "circle" };
  }
  componentWillUnmount() {
    console.log("Box about to be unmounted.");
  }
  //Update and Mounting
  static getDerivedStateFromProps(props, state) {
    return { type: props.type };
  }
  //Mounting
  componentDidMount() {
    console.log("Box done Mount ");
  }
  render() {
    return (
      <div class={styles.bigblue}>
        <h2 className={styles.bigblue}>
          I am a {styles.bigblue} {this.props.type} Box! with color{" "}
          {this.state.color}
        </h2>
      </div>
    );
  }
}
