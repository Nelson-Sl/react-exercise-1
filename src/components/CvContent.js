/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import Title from './functions/Title';
import YearContent from './functions/YearContent';
import Experience from './functions/Experience';

function CvContent(props) {
  return (
    <div className="cvContent">
      <div className="cvTitle">
        <Title title={props.contentTitle}></Title>
      </div>
      <table className="cv">
        {props.cvcContent.map((eduRecord) => {
          return (
            <tr key="cvRecord" className="cvRecord">
              <td className="cvYear">
                <YearContent year={eduRecord.year} />
              </td>
              <td className="cvContent">
                <Experience
                  intro={eduRecord.intro}
                  content={eduRecord.content}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default CvContent;
