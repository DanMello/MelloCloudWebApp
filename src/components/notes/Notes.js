import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Helmet } from "react-helmet";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import { Link } from "react-router-dom";
import "./notes.scss";

const pdfInfo = require("../../data/pdfInfo.json");

class Notes extends Component {
  render() {
    return (
      <ContentWrapper>
        <Helmet>
          <title>mellocloud.com: Notes</title>
        </Helmet>

        <div className="notes-container">
          <h1 className={"notes-heading"}>Web development notes (2017).</h1>

          <p className="notes-paragraph">
            Every time I learn something new, I like to write things down. Here
            are all my notes from when I started learning web development.
          </p>

          <div className="line-new"></div>

          <div className="notes-pdfFlexContainer">
            {pdfInfo.map((file) => {
              return (
                <Link
                  key={file.name}
                  to={`/pdfviewer?file=${file.name}`}
                  id={file.name}
                  className="notes-thumbnailContainer"
                >
                  <div className="notes-imageContainer">
                    <img
                      className="notes-image"
                      src={file.thumbnailPath}
                      alt="oops thumbnail not found."
                    />
                    <div className="notes-filename-container">
                      <span className="notes-filename">
                        {file.nameWithoutNum}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </ContentWrapper>
    );
  }
}

export default hot(module)(Notes);
