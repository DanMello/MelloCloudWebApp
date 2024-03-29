import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//prod
import Home from "./components/home/Home";
import Notes from "./components/notes/Notes";
import Contact from "./components/contact/Contact";
import PdfViewer from "./components/pdfViewer/PdfViewer";
import NoMatch from "./components/nomatch/NoMatch";
// import MediaZact from './components/mediazact/mediazact';
import ReactVideoPlayerDemo from "./components/react-video-player/React-video-player-demo";
import SimplerFormsVisualRepresentation from "./components/react-simpler-forms/react-simpler-forms-visual-representation";
import TicTacChat from "./components/tic-tac-chat/tic-tac-chat";
import TicTacChatv111 from "./components/tic-tac-chat/tic-tac-chatv1.1.1";
import TicTacChatNotes from "./components/tic-tac-chat/notes";
//dev
import Resume from "./components/resume/Resume";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return renderMergedProps(component, routeProps, rest);
      }}
    />
  );
};

const DeveloperRoute = ({ component, ...rest }) => {
  return rest.config.environment === "development" ? (
    <Route
      {...rest}
      render={(routeProps) => {
        return renderMergedProps(component, routeProps, rest);
      }}
    />
  ) : (
    <Redirect to="/" />
  );
};

class AppRoutes extends Component {
  render() {
    let config = this.props.config;

    return (
      <Switch>
        <PropsRoute path="/" exact strict component={Home} config={config} />
        <PropsRoute
          path="/notes"
          exact
          strict
          component={Notes}
          config={config}
        />
        <PropsRoute path="/contact" component={Contact} config={config} />
        <PropsRoute
          path="/pdfviewer"
          exact
          strict
          component={PdfViewer}
          config={config}
        />
        <PropsRoute
          path="/react-video-player"
          exact
          strict
          component={ReactVideoPlayerDemo}
          config={config}
        />
        <PropsRoute
          path="/react-simpler-forms"
          exact
          strict
          component={SimplerFormsVisualRepresentation}
          config={config}
        />
        {/* <PropsRoute path='/tic-tac-chat' exact strict component={TicTacChat} config={config} /> */}
        <PropsRoute
          path="/tic-tac-chat"
          exact
          strict
          component={TicTacChatv111}
          config={config}
        />
        <PropsRoute
          path="/tic-tac-chat/notes"
          exact
          strict
          component={TicTacChatNotes}
          config={config}
        />

        {/* <DeveloperRoute
          path="/resume"
          exact
          strict
          component={Resume}
          config={config}
        /> */}
        {/* <DeveloperRoute path='/tic-tac-chat' exact strict component={TicTacChat} config={config}/> */}

        {/* <PropsRoute path="/mediazact" exact strict component={MediaZact} config={config} /> */}

        <PropsRoute component={NoMatch} config={config} />
      </Switch>
    );
  }
}

export default AppRoutes;
