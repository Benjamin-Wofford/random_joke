import React from "react";
import Setup from "./Setup";
import Punchline from "./Punchline";
import NewJokeButton from "./NewJokeButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

class App extends React.Component {
  state = {
    loading: false,
    setup: "Are you ready",
    punchline: "for some jokes?"
  };

  getJoke = async e => {
    this.setState({ loading: true });
    e.preventDefault();
    const api_call = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = await api_call.json();
    this.setState({
      loading: false,
      setup: joke.setup,
      punchline: joke.punchline
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="grid">
          <CssBaseline />
          <p>Loading..</p>
          <div className="rowMaker">
            <NewJokeButton getJoke={this.getJoke} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="grid">
          <CssBaseline />
          <Setup setup={this.state.setup} />
          <Punchline punchline={this.state.punchline} />
          <div className="rowMaker">
            <NewJokeButton getJoke={this.getJoke} />
          </div>
        </div>
      );
    }
  }
}

export default App;
