import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";

import "./footer.scss";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <div className={"footer-container"}>
        <div className={"footer-links-container"}>
          <div className="footer-flex-break">
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/notes" className="footer-link">
              Notes
            </Link>
            {/* <a href="/assets/pdf/DansResume.pdf" className='footer-link'>Resume</a> */}
            <a href="https://github.com/DanMello" className="footer-link">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jdanmello/"
              className="footer-link"
            >
              LinkedIn
            </a>
          </div>

          <div className={"footer-copyright-container"}>
            <span>&copy; {currentYear} Dan Mello</span>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(Footer);
