import React from "react";

const AdditionalFeature = props => {
  const addIT = e => {
    e.preventDefault();
    props.addition(props.feature);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addIT}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
