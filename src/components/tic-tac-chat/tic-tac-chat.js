import React from "react";
import { Game } from "tic-tac-chat";
import { FaCloud } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "tic-tac-chat/dist/main.css";
import "./tictac.css";

export default function TicTacChat({ config }) {
  let { isMobile } = config;
  return (
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
  );
}
