import React, { Component } from "react";
import { hot } from "react-hot-loader";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import ReactVideoPlayer from "react-vp";

import "./react-video-demo.scss";

class ReactVideoPlayerDemo extends Component {
  render() {
    return (
      <ContentWrapper>
        <div className={"react-video-main-container"}>
          <ReactVideoPlayer
            videoPath="/assets/videos/beach.mp4"
            // videoThumbnail="/assets/videos/thumbnail.png"
            className={"react-video-player-container"}
            mobileClassName={"react-video-player-container-mobile"}
            isMobile={this.props.config.isMobile}
            colors={{
              audioThumb: "#417cfe",
              audioSlider: "#ccc",
              videoThumb: "#417cfe",
              seekbarPlayed: "#417cfe",
              seekbarProgress: "#ccc",
              seekbarBackground: "rgb(58, 61, 80)",
            }}
          />
          <div className={"react-video-sub-container-mobile"}>
            <h1 className={"react-video-heading"}>React-Video-Player Demo</h1>
            <div className="react-video-version">Version 1.2.3</div>
            <div className="react-video-link-container">
              View React-Video-Player on{" "}
              <a
                className="footer-link"
                href="https://github.com/DanMello/react-video-player"
              >
                GitHub
              </a>
            </div>
            <div className="react-video-link-container">
              View React-Video-Player on{" "}
              <a
                className="footer-link"
                href="https://www.npmjs.com/package/react-vp"
              >
                npm
              </a>
            </div>
          </div>
        </div>
      </ContentWrapper>
    );
  }
}

export default hot(module)(ReactVideoPlayerDemo);
