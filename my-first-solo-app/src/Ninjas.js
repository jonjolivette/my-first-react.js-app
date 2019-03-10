import React, { Component } from "react";

export default class Ninjas extends Component {
  render() {
    const { myNinjas } = this.props;

    return (
      <div className="Ninja">
        <div>Name: {name}</div>
        <div>Home: {home}</div>
        <div>Occupation: {occupation}</div>
      </div>
    );
  }
}
