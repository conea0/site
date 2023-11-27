import React from "react";
import styles from "./flexBox.module.scss";

export const FlexBox = ({ children }: React.PropsWithChildren<{}>) => {
  return <div className={styles.flex}>{children}</div>;
};
