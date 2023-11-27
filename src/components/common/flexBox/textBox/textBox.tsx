import Image from "next/image";
import React from "react";
import styles from "./texBox.module.scss";

export interface TextBoxProps {
  icon: string;
  iconSize: "normal" | "large";
  color: "white" | "black";
  title: string;
  className?: string;
}

const sizes = {
  normal: 40,
  large: 80,
};

const colorStyles = {
  white: styles.white,
  black: styles.black,
};

const textStyles = {
  white: styles.whiteText,
  black: styles.blackText,
};

export const TextBox = ({
  icon,
  iconSize,
  color,
  title,
  children,
}: React.PropsWithChildren<TextBoxProps>) => {
  return (
    <div className={`${styles.box} ${colorStyles[color]}`}>
      <div className={styles.head}>
        <Image
          src={icon}
          width={sizes[iconSize]}
          height={sizes[iconSize]}
          alt=""
          className="img"
        ></Image>
        <h3>{title}</h3>
      </div>
      <div className={`${styles.text} ${textStyles[color]}`}>{children}</div>
    </div>
  );
};
