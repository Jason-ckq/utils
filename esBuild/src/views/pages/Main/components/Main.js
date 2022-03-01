import React, { useEffect } from "react";
import classes from "./style.module.less";
const Main = props => {
  const { children } = props;

  return (
    <div className={classes.wrap}>
      <div>1111</div>
      {children}
    </div>
  );
};

export default Main;
