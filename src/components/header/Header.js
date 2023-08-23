import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { FaBars, FaTimes, FaCloud } from "react-icons/fa";
// import Portal from "../../portal/Portal";
import { Link } from "react-router-dom";
import DesktopNav from "../navigation/DesktopNav";
import Welcome from "./Welcome";

import "./header.scss";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      navOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", (e) => {
      //close nav if clicked outside of nav header-navContainer
      if (
        this.state.navOpen &&
        !e.target.closest(".header-navContainer") &&
        !e.target.closest(".header-logoContainer")
      ) {
        this.setState({
          navOpen: false,
        });
      }
    });
  }

  toggleNav(e) {
    this.setState((prevState) => ({
      navOpen: !prevState.navOpen,
    }));
  }

  render() {
    return (
      <div className={"header-headingContainer"}>
        <div className="header-subcontainer">
          <Link to="/" className={"header-logoContainer"}>
            <FaCloud className="header-cloudIcon" />
            <h1 className={"header-logoHeading"}>mello cloud</h1>
          </Link>

          <div className="header-navContainer" onClick={this.toggleNav}>
            {/* <Welcome /> */}

            <FaBars className="header-logoIcon" />

            {!!this.state.navOpen && <DesktopNav toggleNav={this.toggleNav} />}
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(Header);
