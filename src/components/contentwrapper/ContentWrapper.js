import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Header from "../header/Header";
import Footer from "../footer/Footer";

class ContentWrapper extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />

        <div
          className={"routeWrapper"}
          style={
            this.props.background ? { background: this.props.background } : null
          }
        >
          <div className={"main-content-wrapper"}>{this.props.children}</div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default hot(module)(ContentWrapper);
