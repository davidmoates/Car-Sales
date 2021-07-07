import React from "react";

const AddedFeature = props => {
  const removeIT = e => {
    e.preventDefault();
    props.remove(props.feature);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeIT}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
