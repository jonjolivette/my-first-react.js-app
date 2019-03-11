import React, { Component } from "react";
import Ninjas from "./Ninjas";

export default class App extends Component {
  state = {
    myNinjas: [
      { name: "Jonathan", home: "San Francisco", occupation: "web dev", id: 1 },
      {
        name: "Joesph",
        home: "San Antonio",
        occupation: "web designer",
        id: 2
      },
      {
        name: "Jolivette",
        home: "San Jose",
        occupation: "web dev intern",
        id: 3
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome</p>
        {/* <Ninjas ninjas={this.state.myNinjas} /> */}
        <Ninjas myNinjas={this.state.myNinjas} />
      </div>
    );
  }
}
