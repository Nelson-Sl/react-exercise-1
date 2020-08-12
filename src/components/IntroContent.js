import React from 'react';
import Title from './functions/Title';

function IntroContent(props) {
  return (
    <div className="introContent">
      <Title title={props.title} />
      <p className="contentArea"> {props.content} </p>
    </div>
  );
}

export default IntroContent;
