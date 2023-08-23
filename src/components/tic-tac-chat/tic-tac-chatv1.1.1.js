import React from "react";
import { Game } from "tic-tac-chat";
import { FaCloud } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import "./tictac.css";

export default function TicTacChatv111({ config }) {
  console.log(config);
  return (
    <ContentWrapper>
      <div className={"tic-tac-mainContainer"}>
        <Helmet>
          <title>
            Tic-Tac-Chat : Chat and play tic tac toe online with friends.
          </title>
        </Helmet>
        <div className={"tic-tac-subContainer"}>
          <Game config={config} />
        </div>
      </div>
    </ContentWrapper>
  );
}
