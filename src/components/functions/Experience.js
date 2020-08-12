/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import ExpIntro from './ExpIntro';
import ExpContent from './ExpContent';

const Experience = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    <div className="expContent">
      <ExpIntro intro={props.intro}></ExpIntro>
      <ExpContent content={props.content}></ExpContent>
    </div>
  );
};

export default Experience;
