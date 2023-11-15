import React from "react";
import clsx from "clsx";

import styles from "./VisuallyHidden.module.css";

function VisuallyHidden({ className = "", children, ...delegated }) {
  return (
    <span className={clsx(styles.wrapper, className)} {...delegated}>
      {children}
    </span>
  );
}

export default VisuallyHidden;
