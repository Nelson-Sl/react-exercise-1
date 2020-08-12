/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';

function HeadContent(props) {
  return (
    <div className="headTitle">
      <h1>HELLO,</h1>
      <h2>MY NAME IS {props.name.toUpperCase()} AND THIS IS MY RESUME/CV</h2>
    </div>
  );
}

export default HeadContent;
