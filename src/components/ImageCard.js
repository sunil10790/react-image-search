import React from "react";

const ImageCard = (props) => {
  const { description, urls } = props.image;
  return <img alt={description} src={urls.regular} />;
};

export default ImageCard;
