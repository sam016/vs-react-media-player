import React from "react";
import "./read-more.css";

class ReadMore extends React.Component {
  constructor(props) {
    super(props);

    const trimText = this._setUpText(props.text);

    this.state = {
      text: props.text,
      trimText: trimText || props.text,
      hasOverflow: !!trimText,
      isExpaned: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.props.text) {
      const trimText = this._setUpText(nextProps.text);

      this.setState({
        text: nextProps.text,
        trimText: trimText || nextProps.text,
        hasOverflow: !!trimText,
        isExpaned: false
      });
    }
  }

  _setUpText(text, maxLength = 100) {
    const regExp = new RegExp("^.{0," + maxLength + "}\\s");
    const trimText = regExp.exec(text)[0].trim();

    if (trimText.length < text.length) {
      return trimText + "...";
    }
    return;
  }

  _viewMoreClicked() {
    const { isExpaned } = this.state;
    this.setState({ isExpaned: !isExpaned });
  }

  render() {
    const { trimText, text, hasOverflow, isExpaned } = this.state;
    return (
      <div class="readmore">
        <span>{isExpaned ? text : trimText}</span>
        {hasOverflow ? (
          <div
            class="link-read-more"
            onClick={this._viewMoreClicked.bind(this)}
          >
            Read {isExpaned ? "less" : "more"}
          </div>
        ) : null}
      </div>
    );
  }
}

export default ReadMore;
