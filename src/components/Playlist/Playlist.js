import React from "react";
import DrawerVideoAdd from "../DrawerVideoAdd/DrawerVideoAdd";
import defaultList from "./default-list";
import "./playlist.css";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.src || "",
      items: defaultList,
      isDrawerOpened: false
    };
  }

  _drawerVideoAddSuccess(video) {
    const { items } = this.state;
    items.splice(0, 0, video);
    this.setState({ items });

    const scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  }

  _btnAddVideoClicked() {
    this.setState({
      isDrawerOpened: true
    });
  }

  renderListItem(item) {
    return (
      <li className="playlist-item" key={item.url}>
        <a href={`#${item.url}`}>
          <div className="img">
            <img />
          </div>
          <div className="info">
            <div className="title">{item.title}</div>
            <div className="duration">
              <span>{item.duration || "--:--"}</span>
            </div>
          </div>
        </a>
      </li>
    );
  }

  render() {
    const { src, items, isDrawerOpened } = this.state;
    console.log("rendering playlisy");
    return (
      <div className="playlist">
        <ul>
          <li key="item-add" className="item-add">
            <button onClick={this._btnAddVideoClicked.bind(this)} />
          </li>
          {items.map(item => this.renderListItem(item))}
        </ul>
        <DrawerVideoAdd
          isOpened={isDrawerOpened}
          onSuccess={this._drawerVideoAddSuccess.bind(this)}
        />
      </div>
    );
  }
}

export default Playlist;
