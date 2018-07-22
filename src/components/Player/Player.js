import React from "react";
import "./player.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: props.video || {}
    };
  }

  render() {
    const { video } = this.state;
    console.log(video);
    return (
      <div class="player">
        <video width="320" height="240" controls>
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Player;
