import React, { useEffect } from "react";
const NotFound = props => {
  useEffect(() => {
    console.log("enter NotFound...");

    return () => {
      console.log("leave NotFound...");
    };
  });

  return <div>NotFound</div>;
};

export default NotFound;
