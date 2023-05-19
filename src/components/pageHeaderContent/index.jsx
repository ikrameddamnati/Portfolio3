import React from "react";
import './style.scss';

const PageHeader = (props) => {
  const { headerText, item } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{item}</span>
    </div>
  );
};

export default PageHeader;
