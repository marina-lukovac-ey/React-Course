import React from "react";

const MyParagraph = (props) => {
  console.log("paragraph reeval");
  return <p>{props.children}</p>;
};

export default MyParagraph;
