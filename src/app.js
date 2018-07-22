import React from "react";
import Player from "./components/Player/Player";
import Playlist from "./components/Playlist/Playlist";
import ReadMore from "./components/ReadMore/ReadMore";

import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    const url = "https://www.w3schools.com/htmL/mov_bbb.mp4";
    this.state = {
      video: {
        url,
        title: "Dummy",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    };
  }

  _onPlaylistSelect(video) {
    this.setState({ video });
  }

  render() {
    const { video } = this.state;
    console.log("video in app", video);
    return (
      <div class="app">
        <div class="container container-video">
          <Player video={video} />
          <div class="video-info">
            <div class="title">{video.title}</div>
            <div class="desc">
              <ReadMore text={video.description} />
            </div>
          </div>
        </div>
        <div class="container container-playlist">
          <Playlist onSelect={this._onPlaylistSelect.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
