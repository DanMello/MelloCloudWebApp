import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import Notes from "../notes/Notes";
import "./home.scss";

class Home extends Component {
  //check window size and set state
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  //add event listener for window resize
  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  //remove event listener for window resize
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  //set state on window resize
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    return (
      <ContentWrapper>
        <Helmet>
          <title>
            mellocloud.com (Mello Cloud): Home of Dan Mello, Front End Engineer
          </title>
        </Helmet>

        <div className={"home-intro-container"}>
          <div className={"home-pic-container"}>
            <img className="home-my-pic" src="/assets/img/Danresized.png" />
          </div>

          <div className={"home-paragraph-container"}>
            <p className="home-paragraph">
              Welcome to my website. My name is Dan Mello and I am a Front End
              Engineer.
            </p>
            <p className="home-paragraph">
              Here you can find some examples of my work, my web development
              notes, and a way to get in touch.
            </p>

            <div className={"home-image-container"}>
              {/* icons8-briefcase-50 */}
              <div className="new-ul-container">
                <img
                  src="/assets/img/briefcase-alt-svgrepo-com-3.svg"
                  className={"home-email-icon"}
                ></img>
                <a
                  href="https://www.pixels-360.com"
                  target="_blank"
                  className={"home-link-email"}
                >
                  Pixels 360
                </a>
              </div>
              <div className="new-ul-container">
                <img
                  src="/assets/img/email-svgrepo-com.svg"
                  className={"home-email-icon"}
                ></img>
                <a
                  href="mailto:jdanmello@gmail.com"
                  target="_blank"
                  className={"home-link-email"}
                >
                  jdanmello@gmail.com
                </a>
              </div>

              <div className="new-ul-container">
                <img
                  src="/assets/img/location-pin-svgrepo-com.svg"
                  className={"home-email-icon"}
                ></img>
                <div className={"home-link-email"}>Boston, MA</div>
              </div>
              {/* home-email-icon */}
              <div className="home-icon-container">
                <a
                  href="https://www.linkedin.com/in/jdanmello/"
                  target="_blank"
                  className={"home-link-icon"}
                >
                  <img
                    src="/assets/img/iconmonstr-linkedin-3.svg"
                    className={"home-social-icon"}
                  ></img>
                </a>
                <a
                  href="https://github.com/DanMello"
                  target="_blank"
                  className={"home-link-icon"}
                >
                  <img
                    src="/assets/img/iconmonstr-github-3.svg"
                    className={"home-social-icon"}
                  ></img>
                </a>
              </div>
            </div>

            {/* {this.props.config.isMobile && (
              <div className={"home-image-container-mobile"}>
                <div className="new-ul-container">
                  <div>Contact:</div>
                  <a
                    href="mailto:jdanmello@gmail.com"
                    target="_blank"
                    className={"home-link-email"}
                    style={{ marginLeft: "5px" }}
                  >
                    jdanmello@gmail.com
                  </a>
                </div>

                <div className="home-icon-container">
                  <a
                    href="https://www.linkedin.com/in/jdanmello/"
                    target="_blank"
                    className={"home-link-icon"}
                  >
                    <img
                      src="/assets/img/iconmonstr-linkedin-3.svg"
                      className={"home-social-icon"}
                    ></img>
                  </a>
                  <a
                    href="https://github.com/DanMello"
                    target="_blank"
                    className={"home-link-icon"}
                    style={{ marginLeft: "5px" }}
                  >
                    <img
                      src="/assets/img/iconmonstr-github-3.svg"
                      className={"home-social-icon"}
                    ></img>
                  </a>
                </div>
              </div>
            )} */}
          </div>
        </div>

        <div className={"home-projects-container"}>
          <h1 className="home-project-heading">Projects</h1>

          <div className="home-line" />

          <div className="home-project-box" id="react-simpler-forms">
            <div className={"tic-tac-button-container"}>
              <div className="tic-tac-sub">
                <h2 className="home-project-name">tic-tac-chat</h2>
                <Link className="tic-tac-link" to="/tic-tac-chat">
                  Play now
                </Link>
              </div>
              <div className="year">Aug 2019</div>
              {/* <Link className='tic-tac-link' to='/tic-tac-chat'>Play now</Link> */}
            </div>
            <p className={"home-project-paragraph"}>
              Tic Tac Toe game that let's you create or join games and chat
              while you play. You can also play offline with a friend. Created
              with: React Hooks, Node js, MongoDB, and WebSockets.
            </p>
            <ul className="home-ul">
              <li className="home-li">
                View (Front-end) on{" "}
                <a
                  className="footer-link"
                  href="https://github.com/DanMello/tic-tac-chat"
                >
                  GitHub
                </a>
              </li>
              <li className="home-li">
                View (Back-end) on{" "}
                <a
                  className="footer-link"
                  href="https://github.com/DanMello/tic-tac-chat-websocket"
                >
                  Github
                </a>
              </li>
              <li className="home-li">
                View{" "}
                <Link className="footer-link" to="/tic-tac-chat/notes">
                  release notes for all versions
                </Link>
              </li>
            </ul>
          </div>

          <div className="home-line" />

          <div className="home-project-box" id="react-simpler-forms">
            <h2 className="home-project-name">
              react-simpler-forms <div className="year">May 2019</div>
            </h2>
            <p className={"home-project-paragraph"}>
              React Higher Order component that manages all of your forms state
              along with other components that make it easy to create, validate,
              perform search queries, and submit single or multi-step forms.
            </p>
            <ul className="home-ul">
              <li className="home-li">
                View{" "}
                <Link className="footer-link" to="/react-simpler-forms">
                  live demo
                </Link>
              </li>
              <li className="home-li">
                View react-simpler-forms on{" "}
                <a
                  className="footer-link"
                  href="https://github.com/DanMello/react-simpler-forms"
                >
                  GitHub
                </a>
              </li>
              <li className="home-li">
                View react-simpler-forms on{" "}
                <a
                  className="footer-link"
                  href="https://www.npmjs.com/package/react-simpler-forms"
                >
                  npm
                </a>
              </li>
            </ul>
          </div>

          <div className="home-line" />

          <div className="home-project-box" id="react-video-player">
            <h2 className="home-project-name">
              react-video-player <div className="year">Apr 2019</div>
            </h2>
            <p className={"home-project-paragraph"}>
              A React component for easily playing videos on mobile and desktop
              devices. Comes with video controls and customization for audio
              slider and video seekbar to match the theme of your website.
            </p>
            <ul className="home-ul">
              <li className="home-li">
                View{" "}
                <Link className="footer-link" to="/react-video-player">
                  live demo
                </Link>
              </li>
              <li className="home-li">
                View react-video-player on{" "}
                <a
                  className="footer-link"
                  href="https://github.com/DanMello/react-video-player"
                >
                  GitHub
                </a>
              </li>
              <li className="home-li">
                View react-video-player on{" "}
                <a
                  className="footer-link"
                  href="https://www.npmjs.com/package/react-vp"
                >
                  npm
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ContentWrapper>
    );
  }
}

export default hot(module)(Home);
