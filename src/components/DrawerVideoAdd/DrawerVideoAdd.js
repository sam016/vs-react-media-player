import React from "react";
import "./drawer-video-add.css";

class DrawerVideoAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: props.isOpened || false,
      value: props.value || {
        title: "Some title",
        id: "a8_e1yPzjV0",
        description:
          "when you use inline-blocks, to remove the margin just apply word-spacing: -3px; and letter-spacing: -3px; to the parent container and then revert these rules on inline-block elements with word-spacing: normal; and letter-spacing: normal;"
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if ("isOpened" in nextProps) {
      this.setState({
        isOpened: nextProps.isOpened
      });
    }
  }

  _onInputChange = (key, e) => {
    const { value } = this.state;
    console.log("e", e);
    console.log("key", key);
    this.setState({
      value: {
        ...value,
        [key]: e.target.value
      }
    });
  };

  _onDone = () => {
    const fx = this.props.onSuccess;
    this.setState({
      isOpened: false
    });
    if (typeof fx === "function") {
      console.log(this.state.value);
      fx(this.state.value);
    }
  };

  _onCancel = () => {
    console.log("cancelling");
    this.setState({
      isOpened: false
    });
  };

  render() {
    const { value, isOpened } = this.state;
    return (
      <div className={`drawer drawer-video-add ${isOpened ? "opened" : ""}`}>
        <div className="drawer-container">
          <div className="container-content">
            <div className="input-group">
              <label>Title</label>
              <input
                type="text"
                value={value.title}
                onChange={this._onInputChange.bind(this, "title")}
              />
            </div>
            <div className="input-group">
              <label>Id</label>
              <input
                type="text"
                value={value.id}
                onChange={this._onInputChange.bind(this, "id")}
              />
            </div>
            <div className="input-group">
              <label>Description</label>
              <input
                type="text"
                value={value.description}
                onChange={this._onInputChange.bind(this, "description")}
              />
            </div>
          </div>
          <div class="controls-list">
            <button onClick={this._onDone.bind(this)}>Done</button>
            <button className="danger" onClick={this._onCancel.bind(this)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DrawerVideoAdd;
