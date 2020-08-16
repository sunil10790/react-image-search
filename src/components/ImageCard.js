import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { imageHeight: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const imageHeight = Math.ceil(this.imageRef.current.clientHeight / 10 + 1);
    this.setState({ imageHeight });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <img
        style={{ gridRowEnd: `span ${this.state.imageHeight}` }}
        ref={this.imageRef}
        alt={description}
        src={urls.regular}
      />
    );
  }
}

export default ImageCard;
