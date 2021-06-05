import React from "react";
import moment from "moment";

const Time: React.FC = () => {
  const currentTime = moment().toLocaleString();
  return <div>{currentTime}</div>;
};

export default Time;
