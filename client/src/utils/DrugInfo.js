import React from 'react';

// called from withListLoading.js
const getRxcuiInfo = (props) => {
  const { drugs, interactions } = props;
  if (interactions.fullInteractionTypeGroup) return <p>An interaction exists between your medications.  Please contact a medical professional for more information.</p>;
  return (
    
    <div>
        {/* <p> {drugs.drugGroup.name} </p>
        <p> {drugs.drugGroup.conceptGroup[1].conceptProperties[0].rxcui} </p> */}


        <p> No interaction exists</p>
        {/* <p> {interactions.userInput.rxcuis[0]} </p> */}



    </div>
  );
};
export default getRxcuiInfo;