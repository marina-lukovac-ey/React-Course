import React, { useMemo } from "react";

const DemoList = (props) => {
  const { items, title } = props;
  const sortedList = useMemo(() => items.sort((a, b) => a - b), [items]);
  console.log("---DEMO---");
  return (
    <div>
      <div>{title}</div>
      {sortedList.map((el, index) => (
        <div key={index}>{el}</div>
      ))}
    </div>
  );
};

export default React.memo(DemoList);
