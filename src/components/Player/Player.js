import React from "react";
import YouTube from "react-youtube";
import "./player.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opts: {
        height: "320",
        width: "100%",
        playerVars: {
          autoplay: 1,
          fs: 1
        }
      },
      video: props.video || {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.video !== this.props.video) {
      this.setState({
        video: nextProps.video
      });
    }
  }

  _onPlayerReady(e) {
    const yt = e.target;
    console.log("player ready");
    yt.playVideo();
  }
  _onPlayerPlay(e) {
    const yt = e.target;
  }
  _onPlayerPause(e) {
    const yt = e.target;
  }
  _onPlayerEnd(e) {
    const yt = e.target;
  }
  _onPlayerError(e) {
    const yt = e.target;
  }
  _onPlayerStateChange(e) {
    const yt = e.target;
  }
  _onPlayerPlaybackRateChange(e) {
    const yt = e.target;
  }
  _onPlayerPlaybackQualityChange(e) {
    const yt = e.target;
  }

  render() {
    const { video, opts } = this.state;
    console.log("video in player", video);
    return (
      <div class="player">
        <YouTube
          opts={opts}
          videoId={video.id}
          onReady={this._onPlayerReady.bind(this)}
          onPlay={this._onPlayerPlay.bind(this)}
          onPause={this._onPlayerPause.bind(this)}
          onEnd={this._onPlayerEnd.bind(this)}
          onError={this._onPlayerError.bind(this)}
          onStateChange={this._onPlayerStateChange.bind(this)}
          onPlaybackRateChange={this._onPlayerPlaybackRateChange.bind(this)}
          onPlaybackQualityChange={this._onPlayerPlaybackQualityChange.bind(
            this
          )}
        />
      </div>
    );
  }
}

export default Player;
