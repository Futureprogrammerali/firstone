import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: " " };
  }
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  };
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input
          type="text"
          style={{ color: "red" }}
          id="username"
          name="username"
          onChange={this.myChangeHandler}
        />
        <input type="submit" style={mystyle} />
      </form>
    );
  }
}
