/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';

function ImageContent(props) {
  return (
    <div className="image">
      <img className="image-size" src={props.imgurl} alt="cvimage" />
    </div>
  );
}

export default ImageContent;
