import React, { Component } from "react";

export default class NoPage extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
        }}>
        <h1 >404 Page Not Found</h1>
      </div>
    );
  }
}
