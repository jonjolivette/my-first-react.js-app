import React, { Component } from "react";

export default class Ninjas extends Component {
  render() {
    const { myNinjas } = this.props;
    const ninjaList = myNinjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Home: {ninja.home} </div>
          <div>Occupation: {ninja.occupation}</div>
        </div>
      );
    });
    return <div className="ninja-list">{ninjaList}</div>;
  }
}
