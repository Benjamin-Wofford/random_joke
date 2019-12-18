import React from "react";
import Setup from "./Setup";
import Punchline from "./Punchline";
import NewJokeButton from "./NewJokeButton";
import PunchlineButton from "./PunchlineButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

class App extends React.Component {
  render() {

    
    return (
      <div className="grid">
        <CssBaseline />
        <Setup />
        <Punchline />
        <div className="rowMaker">
          <NewJokeButton />
          <PunchlineButton />
        </div>
      </div>
    );
  }
}

export default App;
