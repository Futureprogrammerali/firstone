import React from "react";

export default class BigForm extends React.Component {
  listofnumbers = ["Syria", "Norway"];
  state = {
    title: this.props.title,
    selectednumber: 0,
    overage: false,
    insidecounty: 1,
  };
  constructor(props) {
    super(props);
  }
  numberschanged = (event) => {
    this.setState({ selectednumber: event.target.value });
    console.log(this.state.selectednumber);
  };

  overagechanged = (event) => {
    this.setState({ overage: event.target.checked });
  };
  countrychanged = (event) => {
    this.setState({ insidecounty: event.target.value });
  };
  titlechanged = (event) => {
    let old = this.props.title;
    this.setState({ title: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <label>Your name: </label>
        <input
          type="text"
          id="name"
          value={this.state.name}
          onChange={this.titlechanged}
        />
        <select
          id="numbers"
          value={this.state.selectednumber}
          onChange={this.numberschanged}
        >
          <option value="1">One</option>
          <option value="2">tow</option>
          <option value="3">three</option>
        </select>
        <br></br>
        <label>Are you over age?</label>
        <input
          type="checkbox"
          id="overage"
          name="overage"
          value={this.state.overage}
          onChange={this.overagechanged}
        />
        <br></br>
        <label>Are you over inside country?</label> <br />
        <label>Yes</label>
        <input
          type="radio"
          name="insidecounty"
          value="1"
          checked={this.state.insidecounty == 1}
          onChange={this.countrychanged}
        />
        <label>No</label>
        <input
          type="radio"
          name="insidecounty"
          value="0"
          checked={this.state.insidecounty == 0}
          onChange={this.countrychanged}
        />
      </div>
    );
  }
}
