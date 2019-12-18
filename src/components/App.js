import React from "react";
import Setup from "./Setup";
import Punchline from "./Punchline";
import NewJokeButton from "./NewJokeButton";
import PunchlineButton from "./PunchlineButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

class App extends React.Component {
 
  state = {
    setup: "Why did the chicken cross the road?",
    punchline: "To cross the road"
  }

  getJoke = async (e) => {
    e.preventDefault()
    const api_call = await fetch('https://official-joke-api.appspot.com/random_joke')
    const joke = await api_call.json()
    this.setState({
      setup: joke.setup,
      punchline: joke.punchline
    })
  }
 
  render() {

    return (
      <div className="grid">
        <CssBaseline />
        <Setup setup={this.state.setup}/>
        <Punchline punchline={this.state.punchline}/>
        <div className="rowMaker">
          <NewJokeButton getJoke={this.getJoke}/>
          <PunchlineButton />
        </div>
      </div>
    );
  }
}

export default App;
